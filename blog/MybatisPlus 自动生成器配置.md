
```java
package ${package.Controller};

import ${package.Service}.${table.serviceName};
import ${package.Entity}.${entity};
import com.lk.truck.service.db.dto.${entity}Dto;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.lk.common.model.ResponseCode;
import com.lk.common.model.ResponseDataModel;
import com.baomidou.mybatisplus.plugins.Page;
import org.apache.commons.lang3.StringUtils;
import org.bouncycastle.asn1.ocsp.ResponseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.lk.truck.common.constant.Constants;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.util.List;
/**
 * <p>
 * ${entity} 前端控制器
 * </p>
 *
 * @author atom.hu
 * @since ${date}
 */
@RestController
@RequestMapping("/${table.entityPath}")
@Api(value = "/${table.entityPath}", description = "${entity} 相关接口")
public class ${entity}Controller {


    @Autowired
    public ${table.serviceName} ${table.entityPath}Service;



    /**
     * 保存、修改 【区分id即可】
     * @param ${table.entityPath}  传递的实体
     * @return ResponseDataModel转换结果
     */
    @RequestMapping(value="/save",method= RequestMethod.POST)
    @ApiOperation(response = ResponseDataModel.class, value = "添加 修改接口, 填入Id为更新, 不填Id为新增")
    public ResponseDataModel save(@RequestBody @Validated ${entity} ${table.entityPath}){
        // TODO: 注意排重
        try {
            ${entity} obj = ${table.entityPath}Service.save(${table.entityPath});
            return new ResponseDataModel<>(ResponseCode.SUCCESS.code(), "保存成功", obj);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseDataModel<>(ResponseCode.BUSSINESS_EXCEPTION, "保存失败");
        }
    }



    /**
     * 通过Id 删除对象
     * @param id 要删除的实体
     * @return ResponseDataModel转换结果
     */
    @GetMapping("delete${entity}ById")
    @ApiOperation(response = ResponseDataModel.class, value = "通过id 删除对象")
    public ResponseDataModel delete(@RequestParam("id") Integer id){

        try {
            ${entity} ${table.entityPath} = ${table.entityPath}Service.delete${entity}ById(id);
            return new ResponseDataModel<>(ResponseCode.SUCCESS.code(), "删除成功", ${table.entityPath});
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseDataModel(ResponseCode.BUSSINESS_EXCEPTION, "删除失败");
        }
    }

    /**
     * 批量删除 ${table.comment}
     * @param ids
     * @return
     */
    @GetMapping("batchDelete${entity}ByIdList")
    @Transactional(rollbackFor = Exception.class)
    @ApiOperation(response = ResponseDataModel.class, value = "批量删除${entity}")
    public ResponseDataModel batchDelete${entity}ByIdList(@RequestParam("ids") Integer[] ids) {

        ${table.entityPath}Service.batchDelete${entity}ByIdList(ids);
        return new ResponseDataModel<>(ResponseCode.SUCCESS, "批量删除成功");
    }


    /**
     * 通过Id 获取对象
     * @param id
     * @return ResponseDataModel转换结果
     */
    @RequestMapping(value = "/get${entity}ById",method = RequestMethod.GET)
    @ApiOperation(response = ResponseDataModel.class, value = "通过Id 获取${entity}")
    public ResponseDataModel get(@RequestParam("id")Long id) {
        ${entity} ${table.entityPath} = ${table.entityPath}Service.selectById(id);
        return new ResponseDataModel<>(${table.entityPath});
    }

    /**
     * 获取所有数据
     * @return ResponseDataModel转换结果
     */
    @RequestMapping(value = "/getAllData",method = RequestMethod.GET)
    @ApiOperation(response = ResponseDataModel.class, value = "获取对象的全部数据")
    public ResponseDataModel list(){
        Wrapper<${entity}> q = new EntityWrapper<>();
        q.eq("is_delete", Constants.Status.NORMAL);

        List<${entity}> ${table.entityPath}List = ${table.entityPath}Service.selectList(q);
        return new ResponseDataModel<>(${table.entityPath}List);
    }


    /**
    * 分页查询数据：
    * @param ${table.entityPath}Dto 查询对象
    * @return PageList 分页对象
    */
    @RequestMapping(value = "/get${entity}List",method = RequestMethod.GET)
    public ResponseDataModel<${entity}> get${entity}List(${entity}Dto ${table.entityPath}Dto) {

        Page<${entity}> page = ${table.entityPath}Service.get${entity}List(${table.entityPath}Dto);
        return new ResponseDataModel<${entity}>(page.getTotal(),page.getRecords());
    }
}

```

### entity.java.vm

```java
package ${package.Controller};

import ${package.Service}.${table.serviceName};
import ${package.Entity}.${entity};
import com.lk.truck.service.db.dto.${entity}Dto;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.lk.common.model.ResponseCode;
import com.lk.common.model.ResponseDataModel;
import com.baomidou.mybatisplus.plugins.Page;
import org.apache.commons.lang3.StringUtils;
import org.bouncycastle.asn1.ocsp.ResponseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.lk.truck.common.constant.Constants;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.util.List;
/**
 * <p>
 * ${entity} 前端控制器
 * </p>
 *
 * @author atom.hu
 * @since ${date}
 */
@RestController
@RequestMapping("/${table.entityPath}")
@Api(value = "/${table.entityPath}", description = "${entity} 相关接口")
public class ${entity}Controller {


    @Autowired
    public ${table.serviceName} ${table.entityPath}Service;



    /**
     * 保存、修改 【区分id即可】
     * @param ${table.entityPath}  传递的实体
     * @return ResponseDataModel转换结果
     */
    @RequestMapping(value="/save",method= RequestMethod.POST)
    @ApiOperation(response = ResponseDataModel.class, value = "添加 修改接口, 填入Id为更新, 不填Id为新增")
    public ResponseDataModel save(@RequestBody @Validated ${entity} ${table.entityPath}){
        // TODO: 注意排重
        try {
            ${entity} obj = ${table.entityPath}Service.save(${table.entityPath});
            return new ResponseDataModel<>(ResponseCode.SUCCESS.code(), "保存成功", obj);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseDataModel<>(ResponseCode.BUSSINESS_EXCEPTION, "保存失败");
        }
    }



    /**
     * 通过Id 删除对象
     * @param id 要删除的实体
     * @return ResponseDataModel转换结果
     */
    @GetMapping("delete${entity}ById")
    @ApiOperation(response = ResponseDataModel.class, value = "通过id 删除对象")
    public ResponseDataModel delete(@RequestParam("id") Integer id){

        try {
            ${entity} ${table.entityPath} = ${table.entityPath}Service.delete${entity}ById(id);
            return new ResponseDataModel<>(ResponseCode.SUCCESS.code(), "删除成功", ${table.entityPath});
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseDataModel(ResponseCode.BUSSINESS_EXCEPTION, "删除失败");
        }
    }

    /**
     * 批量删除 ${table.comment}
     * @param ids
     * @return
     */
    @GetMapping("batchDelete${entity}ByIdList")
    @Transactional(rollbackFor = Exception.class)
    @ApiOperation(response = ResponseDataModel.class, value = "批量删除${entity}")
    public ResponseDataModel batchDelete${entity}ByIdList(@RequestParam("ids") Integer[] ids) {

        ${table.entityPath}Service.batchDelete${entity}ByIdList(ids);
        return new ResponseDataModel<>(ResponseCode.SUCCESS, "批量删除成功");
    }


    /**
     * 通过Id 获取对象
     * @param id
     * @return ResponseDataModel转换结果
     */
    @RequestMapping(value = "/get${entity}ById",method = RequestMethod.GET)
    @ApiOperation(response = ResponseDataModel.class, value = "通过Id 获取${entity}")
    public ResponseDataModel get(@RequestParam("id")Long id) {
        ${entity} ${table.entityPath} = ${table.entityPath}Service.selectById(id);
        return new ResponseDataModel<>(${table.entityPath});
    }

    /**
     * 获取所有数据
     * @return ResponseDataModel转换结果
     */
    @RequestMapping(value = "/getAllData",method = RequestMethod.GET)
    @ApiOperation(response = ResponseDataModel.class, value = "获取对象的全部数据")
    public ResponseDataModel list(){
        Wrapper<${entity}> q = new EntityWrapper<>();
        q.eq("is_delete", Constants.Status.NORMAL);

        List<${entity}> ${table.entityPath}List = ${table.entityPath}Service.selectList(q);
        return new ResponseDataModel<>(${table.entityPath}List);
    }


    /**
    * 分页查询数据：
    * @param ${table.entityPath}Dto 查询对象
    * @return PageList 分页对象
    */
    @RequestMapping(value = "/get${entity}List",method = RequestMethod.GET)
    public ResponseDataModel<${entity}> get${entity}List(${entity}Dto ${table.entityPath}Dto) {

        Page<${entity}> page = ${table.entityPath}Service.get${entity}List(${table.entityPath}Dto);
        return new ResponseDataModel<${entity}>(page.getTotal(),page.getRecords());
    }
}

```

### service.java.vm

```java
package ${package.Service};

import ${package.Entity}.${entity};
import ${superServiceClassPackage};
import com.baomidou.mybatisplus.plugins.Page;
import com.lk.truck.service.db.dto.${entity}Dto;

/**
 * <p>
 * $!{table.comment} 服务类
 * </p>
 *
 * @author ${author}
 * @since ${date}
 */
public interface ${table.serviceName} extends ${superServiceClass}<${entity}> {

    /**
     * 批量删除 ${table.serviceName}
     * @param idList
     */
    void batchDelete${entity}ByIdList(Integer[] idList);

    /**
     * 通过Id删除 ${entity}
     * @param id
     * @return ${entity}
     */
    ${entity} delete${entity}ById(Integer id);


    /**
     * 判断, 添加或者更新是否重复
     * @param ${table.entityPath}
     * @param colName
     * @param colValue
     * @return boolean
     */
    boolean isRepeatValue(${entity} ${table.entityPath}, String colName, String colValue);


    /**
     * 获取分页数据
     * @param truckEcuEngineDto
     * @return
     */
    Page<${entity}> get${entity}List(${entity}Dto ${table.entityPath}Dto);


    /**
     * 添加或保存数据
     * @param ${table.entityPath}
     * @return
     */
    ${entity} save(${entity} ${table.entityPath});

}

```

### serviceImpl.java.vm

```java
package ${package.ServiceImpl};

import ${package.Entity}.${entity};
import ${package.Mapper}.${table.mapperName};
import ${package.Service}.${table.serviceName};
import ${superServiceImplClassPackage};
import org.springframework.stereotype.Service;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import org.springframework.transaction.annotation.Transactional;
import com.lk.truck.common.constant.Constants;
import org.apache.commons.lang3.StringUtils;
import com.lk.truck.service.db.dto.${entity}Dto;

import java.util.Arrays;
import java.util.List;

/**
 * <p>
 * $!{table.comment} 服务实现类
 * </p>
 *
 * @author ${author}
 * @since ${date}
 */
@Service
public class ${table.serviceImplName} extends ${superServiceImplClass}<${table.mapperName}, ${entity}> implements ${table.serviceName} {


    @Transactional(rollbackFor = Exception.class)
    @Override
    public void batchDelete${entity}ByIdList(Integer[] idList) {
        Arrays.stream(idList).forEach(id -> {
            ${entity} ${table.entityPath} = new ${entity}();
            ${table.entityPath}.setIsDelete(Constants.Status.DELETE);
            ${table.entityPath}.setId(id);
            updateById(${table.entityPath});
        });
    }

    @Override
    public boolean isRepeatValue(${entity} ${table.entityPath}, String colName, String colValue) {
        EntityWrapper<${entity}> q = new EntityWrapper<>();

        q.eq("is_delete", Constants.Status.NORMAL);
        if (${table.entityPath}.getId() != null) {
            q.notIn("id", ${table.entityPath}.getId());
        }
        q.eq(colName, colValue);

        List<${entity}> ${table.entityPath}List = selectList(q);
        return !${table.entityPath}List.isEmpty();
    }

    @Override
    public Page<${entity}> get${entity}List(${entity}Dto ${table.entityPath}Dto) {
        EntityWrapper<${entity}> q = new EntityWrapper();

        q.eq("is_delete", Constants.Status.NORMAL);
        // 模糊查询
        if (StringUtils.isNotBlank(${table.entityPath}Dto.getCondition())) {
            q.like("name", ${table.entityPath}Dto.getCondition());
        }

        Page<${entity}> page = new Page<>(${table.entityPath}Dto.getPageIndex(), ${table.entityPath}Dto.getPageSize());
        page = selectPage(page, q);
        return page;
    }

    @Override
    public ${entity} save(${entity} ${table.entityPath}) {

        // TODO: 注意判重
        insertOrUpdate(${table.entityPath});
        return ${table.entityPath};
    }

    @Override
    public ${entity} delete${entity}ById(Integer id) {
        ${entity} ${table.entityPath} = selectById(id);
        ${table.entityPath}.setIsDelete(Constants.Status.DELETE);

        updateById(${table.entityPath});
        return ${table.entityPath};
    }
}

```
