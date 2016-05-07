package com.example.page;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class JqPage<T> implements Pageable {
    String records = "830";
    int total;
    int page;
    List<T> rows;
    public JqPage(List<T> rows,int pageNum,int total){
    	this.rows = rows;
    	this.page = pageNum;
    	this.total = total;
    }
	public int getPage() {
		// TODO Auto-generated method stub
		return page;
	}
	public int getPageNumber() {
		// TODO Auto-generated method stub
		return page;
	}
	public int getPageSize() {
		// TODO Auto-generated method stub
		return 0;
	}
	public int getOffset() {
		// TODO Auto-generated method stub
		return 0;
	}
	public Sort getSort() {
		// TODO Auto-generated method stub
		return null;
	}
	public Pageable next() {
		// TODO Auto-generated method stub
		return null;
	}
	public Pageable previousOrFirst() {
		// TODO Auto-generated method stub
		return null;
	}
	public Pageable first() {
		// TODO Auto-generated method stub
		return null;
	}
	public boolean hasPrevious() {
		// TODO Auto-generated method stub
		return false;
	}
	public String getRecords() {
		return records;
	}
	public void setRecords(String records) {
		this.records = records;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public List<T> getRows() {
		return rows;
	}
	public void setRows(List<T> rows) {
		this.rows = rows;
	}
}
