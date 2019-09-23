package com.spring.factory;

import com.spring.service.IAccountService;
import com.spring.service.impl.AccountServiceImpl;

/**
 * 模拟一个简单jar中的工程模式,并提工一个返回对象的方法
 */
public class InstanceFactory {

    public IAccountService getInstance(){
        return  new AccountServiceImpl();
    }
}
