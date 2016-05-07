package com.example.page;

import java.util.Map;

public interface PageContentProvider<T> {
	
	public JqPage<T> getPageElement(Map context);
}
