package com.spring.ui;

import com.spring.dao.IAccountDao;
import com.spring.service.IAccountService;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

/**
 * 模拟客户端
 *
 *  核心容器的两个接口引发的问题
 *  ApplicationContex:  适用于单例模式,一开始就创建
 *      它在构建核心容器时,创建对象采取的策略是采用立即加载的方式,也就是说一旦读取配置文件就创建好配置文件中需要的对象了
 *  BeanFactory 使用场景多例模式  什么时候需要  什么时候创建
 *      它在创建核心容器时,创建对象采用的时延迟加载的方式,也就是说,什么时候根据id去获取对象,什么时候才真正的创建对象
 *
 */
public class Client {

    public static void main (String [] args){
//        ApplicationContext ac = new ClassPathXmlApplicationContext("bean.xml");
//
//        IAccountService accountService = (IAccountService)ac.getBean("accountservice");
//        IAccountDao dao = ac.getBean("accountDao",IAccountDao.class);

        Resource resource  = new ClassPathResource("bean.xml");
        BeanFactory beanFactory = new XmlBeanFactory(resource);
        IAccountService service = (IAccountService) beanFactory.getBean("accountService");
        //IAccountDao dao = (IAccountDao) beanFactory.getBean("accountDao");

        service.saveAccount();
        System.out.println(service);
        //System.out.println(dao);
    }
}
