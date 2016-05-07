package com.example.page;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Task;
import com.example.rest.service.TaskRestService;
@Service
public class TaskPageProvider implements PageContentProvider<Task> {
	@Autowired
	TaskRestService taskRestService;
	public JqPage<Task> getPageElement(Map context) {
		// TODO Auto-generated method stub
		List<Task> list = taskRestService.getElements(context);
		JqPage<Task> page = new JqPage<Task>(list,1,42);
		return page;
	}

}
