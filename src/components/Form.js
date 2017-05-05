import React, { Component } from 'react';
/*import {
	Form,
	Input,
	Select,
	Checkbox,
	DatePicker,
	Col,
	Radio,
	Button,
	Modal,
	message
} from 'antd';*/
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import Checkbox from 'antd/lib/checkbox';
import DatePicker from 'antd/lib/date-picker';
import Col from 'antd/lib/col';
import Radio from 'antd/lib/radio';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import message from 'antd/lib/message';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

class MyForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}

	// 选择select
	handleSelectChange = (value) => {
		console.log(`selected ${value}`);
	}

	// 提交表单
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, fieldsValue) => {
			if (err) {
				return;
			}

			const values = {
				userName: fieldsValue['userName'],
				datePicker: fieldsValue['datePicker'].format('YYYY-MM-DD'),
				content: fieldsValue['content'],
				people: fieldsValue['people'],
				checkboxItem: fieldsValue['checkbox-group'],
				radioItem: fieldsValue['radio-group']
			};
			console.log('收到表单值: ', values);

			this.props.form.resetFields();
		});
	}

	// 显示弹框
	showModal = () => {
		this.setState({
			visible: true
		});
	}

	// 隐藏弹框
	hideModal = () => {
		this.setState({
			visible: false
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: { span: 3 },
			wrapperCol: { span: 6 }
		};

		const success = function() {
			message.success('操作成功!');
		};

		return (
			<Form onSubmit={this.handleSubmit}>
				<FormItem
					id="control-input"
					label="输入框"
					{...formItemLayout}
					required>
					{getFieldDecorator('userName')(						
						<Input id="control-input" placeholder="Please enter..." />
					)}					
				</FormItem>

				<FormItem
                    label="日期选择框"
                    labelCol={{ span: 3 }}
                    required>
                    <Col span="2">
                        <FormItem>
                        	{getFieldDecorator('datePicker')(
                            	<DatePicker placeholder="Select Date" />
                        	)}
                        </FormItem>
                    </Col>
                </FormItem>

                <FormItem
                    id="control-textarea"
                    label="文本域"
                    {...formItemLayout}>
                    {getFieldDecorator('content')(
                    	<Input type="textarea" id="control-textarea" rows="3" />
                	)}                    
                </FormItem>

                <FormItem
                    id="select"
                    label="Select 选择器"
                    {...formItemLayout}>
                    {getFieldDecorator('people', {
                    	onChange: this.handleSelectChange,
                    	initialValue: 'lucy'
                    })(                    	
	                    <Select id="select" size="large" style={{ width: 200 }}>
	                        <Option value="jack">jack</Option>
	                        <Option value="lucy">lucy</Option>
	                        <Option value="disabled" disabled>disabled</Option>
	                        <Option value="yiminghe">yiminghe</Option>
	                    </Select>
                	)}
                </FormItem>

                <FormItem
                    label="Checkbox 多选框"
                    {...formItemLayout}>
                	{getFieldDecorator('checkbox-group')(    
                		<CheckboxGroup>
                			<Checkbox className="ant-checkbox-inline" value="option1" >选项一</Checkbox>
                			<Checkbox className="ant-checkbox-inline" value="option2" >选项二</Checkbox>
                			<Checkbox className="ant-checkbox-inline" value="option3" >选项三</Checkbox>
                		</CheckboxGroup>            		
            		)}
                </FormItem>

                <FormItem
                    label="Radio 单选框"
                    {...formItemLayout} >
                    {getFieldDecorator('radio-group', {
                    	initialValue: 'b'
                    })(                		
	                    <RadioGroup>
	                        <Radio value="a">A</Radio>
	                        <Radio value="b">B</Radio>
	                        <Radio value="c">C</Radio>
	                        <Radio value="d">D</Radio>
	                    </RadioGroup>
                	)}
                </FormItem>

                <FormItem wrapperCol={{ span: 6, offset: 3 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit" onClick={success}>确定</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button type="ghost" onClick={this.showModal}>点击有惊喜</Button>
                </FormItem>
                <Modal title="登录" visible={this.state.visible} onOk={this.hideModal} onCancel={this.hideModal}>
                    这是一个modal
                </Modal>
			</Form>
		);
	}
};

MyForm = Form.create()(MyForm);

export default MyForm;