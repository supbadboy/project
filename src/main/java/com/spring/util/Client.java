package com.spring.util;

import com.spring.factory.BeanFactory;
import com.spring.service.IAccountService;
import com.spring.service.impl.AccountService;

public class Client {
    public static  void  main(String [] arg){
       // IAccountService  service = new AccountService();
        //因为getBean  返回的是Object 类型，所以这里需要强制类型转换
        IAccountService  service = (IAccountService) BeanFactory.getBean("accountService");

        service.savaAccount();
    }
}
