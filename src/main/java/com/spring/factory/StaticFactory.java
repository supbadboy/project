package com.spring.factory;

import com.spring.service.IAccountService;
import com.spring.service.impl.AccountServiceImpl;

/**
 * 模拟一个静态工厂
 */
public class StaticFactory {
    public  static IAccountService getInstance (){
        return new AccountServiceImpl();
    }
}
