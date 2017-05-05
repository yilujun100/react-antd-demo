import React, { Component } from 'react';
import Table from 'antd/lib/table';

class MyTable extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		tDate: [],
  		selectedRowKeys: []
  	}
  }

  componentDidMount() {
  	const data = [];

  	for (let i = 0; i < 46; i++) {
  		data.push({
  			key: i,
  			name: `Edward King ${i}`,
  			age: 18,
  			address: `London, Park Lane no. ${i}`,
  			remark: 'https://github.com/yilujun100',
  			operate: 'none'
  		})
  	}

  	this.setState({
  		tDate: data
  	});
  }

  // checkbox status
  onSelectChange = (selectedRowKeys) => {
  	console.log('selectedRowKeys changed: ', selectedRowKeys);
  	this.setState({ selectedRowKeys });
  }

  render() {
  	const columns = [
  		{
  			title: 'Name',
  			width: '20%',
  			dataIndex: 'name'
  		},
  		{
  			title: 'Age',
  			width: '20%',
  			dataIndex: 'age'
  		},
  		{
  			title: 'Address',
  			width: '20%',
  			dataIndex: 'address'
  		},
  		{
  			title: 'Remark',
  			width: '20%',
  			dataIndex: 'remark',
  			render: text => <a href={text} target="_blank">github-yilujun100</a>
  		},
  		{
  			title: 'Actions',
  			width: '20%',
  			dataIndex: 'operate'
  		}
  	];

  	const { selectedRowKeys } = this.state;

  	const rowSelection = {
  		selectedRowKeys,
  		onChange: this.onSelectChange
  	};

  	const pagination = {
  		total: this.state.tDate.length,
  		showSizeChanger: true,
  		onShowSizeChange(current, pageSize) {
  			console.log('Current: ', current, '; PageSize: ', pageSize);
  		},
  		onChange(current) {
  			console.log('Current: ', current);
  		}
  	};
    return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.tDate} bordered pagination={pagination} />
    );
  }
}

export default MyTable;