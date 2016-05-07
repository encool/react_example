package com.example.inf;

import com.example.entity.TaskExample.Criteria;

public interface IExample {
	public boolean isDistinct();
	public void setDistinct(boolean b);
	public void or(Criteria criteria);
}
