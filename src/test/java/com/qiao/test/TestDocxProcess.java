package com.qiao.test;

import static org.junit.Assert.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.docx4j.Docx4J;
import org.docx4j.openpackaging.exceptions.Docx4JException;
import org.docx4j.openpackaging.packages.WordprocessingMLPackage;
import org.docx4j.openpackaging.parts.WordprocessingML.MainDocumentPart;
//import org.apache.poi.POIXMLFactory;
//import org.apache.poi.extractor.ExtractorFactory;
//import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
//import org.apache.poi.xwpf.usermodel.IBodyElement;
//import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.junit.Test;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class TestDocxProcess {

//	@Test
//	public void test() throws IOException {
////		POIDataSamples.getDocumentInstance().openResourceAsStream("test.docx");
////		POIXMLFactory factory = new POIXMLFactory("test.docx");
//		InputStream in;
//		XWPFWordExtractor extractor = null;
//		try {
//
////			this.getClass().getClassLoader().get
//			in = this.getClass().getClassLoader().getResourceAsStream("test.docx");
////			in = new FileInputStream(new File("test.docx"));
//			XWPFDocument doc = new XWPFDocument(in);
//			extractor = new XWPFWordExtractor(doc);
//			List list = doc.getBodyElements();
//			String text = extractor.getText();
//			IBodyElement e = null ;
//			extractor.appendBodyElementText(new StringBuffer("1") , e);
//		} catch (FileNotFoundException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}finally{
//			if(extractor!=null){
//				extractor.close();
//			}			
//		}
//		fail("Not yet implemented");
//	}

	@Test
	public void testConvertListToJson() throws IOException, Docx4JException{
		WordprocessingMLPackage wordMLPackage = Docx4J.load(new java.io.File("G:\\Users\\liqiao\\Desktop\\mysql安装指南fortest.docx"));
		MainDocumentPart mainDoc = wordMLPackage.getMainDocumentPart();
		List list = mainDoc.getContent();
		ObjectMapper mapper = new ObjectMapper();
//		JSONObject o;
		mapper.writeValue(new File("G:\\Users\\liqiao\\Desktop\\json.txt"), list);
	}
}
