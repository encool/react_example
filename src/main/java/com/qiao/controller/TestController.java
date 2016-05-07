package com.qiao.controller;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
import javax.xml.bind.JAXBElement;

import org.docx4j.Docx4J;
import org.docx4j.Docx4jProperties;
import org.docx4j.convert.out.HTMLSettings;
import org.docx4j.openpackaging.exceptions.Docx4JException;
import org.docx4j.openpackaging.packages.WordprocessingMLPackage;
import org.docx4j.openpackaging.parts.WordprocessingML.MainDocumentPart;
import org.docx4j.wml.Body;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
public class TestController {
	
//	@RequestMapping("/getdata")
//	public void getData(ServletRequest request,ServletResponse response) throws Docx4JException, JsonGenerationException, JsonMappingException, IOException{
//		WordprocessingMLPackage wordMLPackage = Docx4J.load(new java.io.File("G:\\Users\\liqiao\\Desktop\\mysql安装指南fortest.docx"));
//		MainDocumentPart mainDoc = wordMLPackage.getMainDocumentPart();
//		Body body = mainDoc.getContents().getBody();
////		List result = new ArrayList<Object>();
//		ObjectMapper mapper = new ObjectMapper();
////		mapper.disable(arg0)
////		JSONObject o;
//		response.setCharacterEncoding("UTF-8");
//		mapper.writeValue(response.getOutputStream(), body);
//	}
//	@RequestMapping("/converter")
//	public void converterDocx2HTML(ServletRequest request,ServletResponse response) throws Docx4JException, IOException{ 	
//		WordprocessingMLPackage wordMLPackage = Docx4J.load(new java.io.File("G:\\Users\\liqiao\\Desktop\\mysql安装指南fortest.docx"));
//
//		
//		// HTML exporter setup (required)
//		// .. the HTMLSettings object
//    	HTMLSettings htmlSettings = Docx4J.createHTMLSettings();
//
////    	htmlSettings.setImageDirPath(inputfilepath + "_files");
////    	htmlSettings.setImageTargetUri(inputfilepath.substring(inputfilepath.lastIndexOf("/")+1)
////    			+ "_files");
//    	htmlSettings.setWmlPackage(wordMLPackage);
//    	
//    	
//    	/* CSS reset, see http://itumbcom.blogspot.com.au/2013/06/css-reset-how-complex-it-should-be.html 
//    	 * 
//    	 * motivated by vertical space in tables in Firefox and Google Chrome.
//        
//	        If you have unwanted vertical space, in Chrome this may be coming from -webkit-margin-before and -webkit-margin-after
//	        (in Firefox, margin-top is set to 1em in html.css)
//	        
//	        Setting margin: 0 on p is enough to fix it.
//	        
//	        See further http://www.css-101.org/articles/base-styles-sheet-for-webkit-based-browsers/    	
//    	*/
//    	String userCSS = "html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, img,  ol, ul, li, table, caption, tbody, tfoot, thead, tr, th, td " +
//    			"{ margin: 0; padding: 0; border: 0;}" +
//    			"body {line-height: 1;} ";
//    	htmlSettings.setUserCSS(userCSS);
//    	
//    	
//    	//Other settings (optional)
////    	htmlSettings.setUserBodyTop("<H1>TOP!</H1>");
////    	htmlSettings.setUserBodyTail("<H1>TAIL!</H1>");
//		
//		// Sample sdt tag handler (tag handlers insert specific
//		// html depending on the contents of an sdt's tag).
//		// This will only have an effect if the sdt tag contains
//		// the string @class=XXX
////			SdtWriter.registerTagHandler("@class", new TagClass() );
//		
////		SdtWriter.registerTagHandler(Containerization.TAG_BORDERS, new TagSingleBox() );
////		SdtWriter.registerTagHandler(Containerization.TAG_SHADING, new TagSingleBox() );
//		
//		// output to an OutputStream.		
//		OutputStream os = response.getOutputStream(); 
////		if (save) {
////			os = new FileOutputStream(inputfilepath + ".html");
////		} else {
////			os = new ByteArrayOutputStream();
////		}
//
//		// If you want XHTML output
//    	Docx4jProperties.setProperty("docx4j.Convert.Out.HTML.OutputMethodXML", true);
//
//		//Don't care what type of exporter you use
////		Docx4J.toHTML(htmlSettings, os, Docx4J.FLAG_NONE);
//		//Prefer the exporter, that uses a xsl transformation
////		Docx4J.toHTML(htmlSettings, os, Docx4J.FLAG_EXPORT_PREFER_XSL);
//		//Prefer the exporter, that doesn't use a xsl transformation (= uses a visitor)
//		Docx4J.toHTML(htmlSettings, os, Docx4J.FLAG_EXPORT_PREFER_NONXSL);
//
////		if (save) {
////			System.out.println("Saved: " + inputfilepath + ".html ");
////		} else {
////			System.out.println( ((ByteArrayOutputStream)os).toString() );
////		}
//
//		// Clean up, so any ObfuscatedFontPart temp files can be deleted 
//		if (wordMLPackage.getMainDocumentPart().getFontTablePart()!=null) {
//			wordMLPackage.getMainDocumentPart().getFontTablePart().deleteEmbeddedFontTempFiles();
//		}		
//		// This would also do it, via finalize() methods
//		htmlSettings = null;
//		wordMLPackage = null;
//    		
//	}
}
