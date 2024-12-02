package com.entity.view;

import org.apache.tools.ant.util.DateUtils;
import com.annotation.ColumnInfo;
import com.entity.AnyuanEntity;
import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;
import com.utils.DateUtil;

/**
* 案源信息
* 后端返回视图实体辅助类
* （通常后端关联的表或者自定义的字段需要返回使用）
*/
@TableName("anyuan")
public class AnyuanView extends AnyuanEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	//当前表
	/**
	* 案源类型的值
	*/
	@ColumnInfo(comment="案源类型的字典表值",type="varchar(200)")
	private String anyuanValue;
	/**
	* 收案审批的值
	*/
	@ColumnInfo(comment="收案审批的字典表值",type="varchar(200)")
	private String anyuanYesnoValue;

	//级联表 客户
		/**
		* 客户名称
		*/

		@ColumnInfo(comment="客户名称",type="varchar(200)")
		private String yonghuName;
		/**
		* 头像
		*/

		@ColumnInfo(comment="头像",type="varchar(255)")
		private String yonghuPhoto;
		/**
		* 客户手机号
		*/

		@ColumnInfo(comment="客户手机号",type="varchar(200)")
		private String yonghuPhone;
		/**
		* 客户身份证号
		*/

		@ColumnInfo(comment="客户身份证号",type="varchar(200)")
		private String yonghuIdNumber;
		/**
		* 邮箱
		*/

		@ColumnInfo(comment="邮箱",type="varchar(200)")
		private String yonghuEmail;
		/**
		* 假删
		*/

		@ColumnInfo(comment="假删",type="int(11)")
		private Integer yonghuDelete;



	public AnyuanView() {

	}

	public AnyuanView(AnyuanEntity anyuanEntity) {
		try {
			BeanUtils.copyProperties(this, anyuanEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}



	//当前表的
	/**
	* 获取： 案源类型的值
	*/
	public String getAnyuanValue() {
		return anyuanValue;
	}
	/**
	* 设置： 案源类型的值
	*/
	public void setAnyuanValue(String anyuanValue) {
		this.anyuanValue = anyuanValue;
	}
	//当前表的
	/**
	* 获取： 收案审批的值
	*/
	public String getAnyuanYesnoValue() {
		return anyuanYesnoValue;
	}
	/**
	* 设置： 收案审批的值
	*/
	public void setAnyuanYesnoValue(String anyuanYesnoValue) {
		this.anyuanYesnoValue = anyuanYesnoValue;
	}


	//级联表的get和set 客户

		/**
		* 获取： 客户名称
		*/
		public String getYonghuName() {
			return yonghuName;
		}
		/**
		* 设置： 客户名称
		*/
		public void setYonghuName(String yonghuName) {
			this.yonghuName = yonghuName;
		}

		/**
		* 获取： 头像
		*/
		public String getYonghuPhoto() {
			return yonghuPhoto;
		}
		/**
		* 设置： 头像
		*/
		public void setYonghuPhoto(String yonghuPhoto) {
			this.yonghuPhoto = yonghuPhoto;
		}

		/**
		* 获取： 客户手机号
		*/
		public String getYonghuPhone() {
			return yonghuPhone;
		}
		/**
		* 设置： 客户手机号
		*/
		public void setYonghuPhone(String yonghuPhone) {
			this.yonghuPhone = yonghuPhone;
		}

		/**
		* 获取： 客户身份证号
		*/
		public String getYonghuIdNumber() {
			return yonghuIdNumber;
		}
		/**
		* 设置： 客户身份证号
		*/
		public void setYonghuIdNumber(String yonghuIdNumber) {
			this.yonghuIdNumber = yonghuIdNumber;
		}

		/**
		* 获取： 邮箱
		*/
		public String getYonghuEmail() {
			return yonghuEmail;
		}
		/**
		* 设置： 邮箱
		*/
		public void setYonghuEmail(String yonghuEmail) {
			this.yonghuEmail = yonghuEmail;
		}

		/**
		* 获取： 假删
		*/
		public Integer getYonghuDelete() {
			return yonghuDelete;
		}
		/**
		* 设置： 假删
		*/
		public void setYonghuDelete(Integer yonghuDelete) {
			this.yonghuDelete = yonghuDelete;
		}


	@Override
	public String toString() {
		return "AnyuanView{" +
			", anyuanValue=" + anyuanValue +
			", anyuanYesnoValue=" + anyuanYesnoValue +
			", yonghuName=" + yonghuName +
			", yonghuPhoto=" + yonghuPhoto +
			", yonghuPhone=" + yonghuPhone +
			", yonghuIdNumber=" + yonghuIdNumber +
			", yonghuEmail=" + yonghuEmail +
			", yonghuDelete=" + yonghuDelete +
			"} " + super.toString();
	}
}
