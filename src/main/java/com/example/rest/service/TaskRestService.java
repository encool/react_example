package com.example.rest.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.client.TaskMapper;
import com.example.entity.Task;
import com.example.entity.TaskExample;
import com.example.inf.IExample;
import com.example.inf.IMapper;
import com.example.rest.service.consts.RESTConstant;
@Service
public class TaskRestService implements IRESTService<Task> {
	@Autowired
	SqlSessionFactory sqlSessionFactory;
	TaskExample taskExample;
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Task> getElements(Map context) {
		// TODO Auto-generated method stub
		SqlSession session = sqlSessionFactory.openSession();
		String entityName = (String) context.get(RESTConstant.ENTITY_NAME);
		try {
/*			String mapClazzStr = "com.example.client."+entity+"Mapper";
			String exampleClazzStr = "com.example.entity."+entity+"Example";
			Class mapperClazz = Class.forName(mapClazzStr);
			Class exampleClazz = Class.forName(exampleClazzStr);
			IMapper mapper = (IMapper)session.getMapper(mapperClazz);
			IExample taskExample = (IExample) exampleClazz.newInstance();*/
			TaskMapper mapper = session.getMapper(TaskMapper.class);
			TaskExample taskExample = new TaskExample();
			taskExample.or().andTaskNameEqualTo("eat");
			taskExample.list(0, 100);
			List tasks = mapper.selectByExample(taskExample);
			return tasks;
		} finally {
		  session.close();
		}
	}

	public Task getElementById(String id){
		SqlSession session = sqlSessionFactory.openSession();
		try {
			TaskMapper mapper = session.getMapper(TaskMapper.class);
/*			TaskExample taskExample = new TaskExample();
			taskExample.or().andIdEqualTo(id);*/
			return mapper.selectByPrimaryKey(id);
		} finally {
			  session.close();
		}
		
	}

}
