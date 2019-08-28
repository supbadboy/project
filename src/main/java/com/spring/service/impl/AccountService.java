package com.spring.service.impl;

import com.spring.dao.IAccountDao;
import com.spring.dao.impl.AccountDao;
import com.spring.service.IAccountService;

public class AccountService implements IAccountService {

    private IAccountDao dao = new AccountDao();
    public void savaAccount() {
        System.out.println("模拟保存服务的接口实现");
    }
}
