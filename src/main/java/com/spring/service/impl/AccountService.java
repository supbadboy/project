package com.spring.service.impl;

import com.spring.dao.IAccountDao;
import com.spring.dao.impl.AccountDao;
import com.spring.factory.BeanFactory;
import com.spring.service.IAccountService;

public class AccountService implements IAccountService {

    //private IAccountDao dao = new AccountDao();
    private IAccountDao dao =(IAccountDao) BeanFactory.getBean("accountDao");

    public void savaAccount() {

        System.out.println("模拟保存服务的接口实现");
        System.out.println(dao);
    }
}
