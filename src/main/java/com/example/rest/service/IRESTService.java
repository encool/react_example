package com.example.rest.service;

import java.util.List;
import java.util.Map;

public interface IRESTService<T> {

	public List<T> getElements(Map context);
	public T getElementById(String id);
}
