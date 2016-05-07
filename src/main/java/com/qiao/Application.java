package com.qiao;

import org.apache.ibatis.datasource.pooled.PooledDataSource;
import org.apache.ibatis.mapping.Environment;
import org.apache.ibatis.session.Configuration;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.apache.ibatis.transaction.TransactionFactory;
import org.apache.ibatis.transaction.jdbc.JdbcTransactionFactory;
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.client.TaskMapper;

//@SpringBootApplication
public class Application {

    public static void main(String[] args) {
    	PooledDataSource dds =  new PooledDataSource();  
        dds.setUrl("jdbc:mysql://192.168.3.10:3306/example");  
        dds.setPassword("root");  
        dds.setUsername("root");  
        dds.setDriver("com.mysql.jdbc.Driver");     	
    	TransactionFactory transactionFactory = new JdbcTransactionFactory();
    	Environment environment = new Environment("development", transactionFactory, dds);
    	Configuration configuration = new Configuration(environment);
    	configuration.addMapper(TaskMapper.class);
    	SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(configuration);
//        SpringApplication.run(Application.class, args);
    }
}