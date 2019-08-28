package com.spring.util;

import com.spring.service.IAccountService;
import com.spring.service.impl.AccountService;

public class Client {
    public static  void  main(String [] arg){
        IAccountService  service = new AccountService();
        service.savaAccount();
    }
}
