package com.spring.service.impl;

import com.spring.service.IAccountService;
import com.spring.dao.IAccountDao;
import com.spring.dao.impl.AccountDaoImpl;

public class AccountServiceImpl implements IAccountService {


    public void saveAccount() {

        System.out.println("模拟保存账户服务接口");
    }
}
