package com.EZedu.model;

import java.util.List;

public class Response {
    private String result;
    private Object model;
    private List list;

    public Response() {
    }

    public Response(String result, Object model) {
        this.result = result;
        this.model = model;
    }

    public Response(String result, List list) {
        this.result = result;
        this.list = list;
    }

    public Response(String result, Object model, List list) {
        this.result = result;
        this.model = model;
        this.list = list;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public Object getModel() {
        return model;
    }

    public void setModel(Object model) {
        this.model = model;
    }

    public List getList() {
        return list;
    }

    public void setList(List list) {
        this.list = list;
    }
}
