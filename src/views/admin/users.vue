<template>
    <div>
        <el-table
                :data="nowTableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="注册日期">
            </el-table-column>
            <el-table-column
                    prop="username"
                    label="用户姓名">
            </el-table-column>
            <el-table-column
                    prop="email"
                    label="注册邮箱">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button size="small" @click="handleToFreeze(scope.$index,scope.row)">{{scope.row.isFreeze ? '已冻结' : '未冻结'  }}</el-button>
                    <el-button type="danger" @click="handleToDelete(scope.$index,scope.row)" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="page"
                background
                layout="prev, pager, next"
                :total="tableData.length"
                :page-size="pageSize"
                :current-page.sync="currentPage">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "users",
        data(){
            return{
                tableData : [],
                currentPage :1,
                pageSize:4
            }
        },
        mounted() {
            this.$axios.get('/api2/admin/usersList').then((res)=>{
                let status = res.data.status;
                if(status === 0){
                    this.tableData = res.data.data.usersList;
                }
            });
        },
        computed :{
            nowTableData(){
                return this.tableData.slice((this.currentPage-1)*this.pageSize , this.currentPage*this.pageSize) || [];
            }
        },
        methods :{
            handleToFreeze(index,row){
                this.$axios.post('/api2/admin/updateFreeze',{
                    email : row.email,
                    isFreeze : !row.isFreeze
                }).then((res)=>{
                    let status = res.data.status;
                    if(status === 0){
                        this.$alert('账号冻结操作已成功', '消息', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.tableData[index].isFreeze = !row.isFreeze;
                            }
                        })

                    }else {

                        this.$alert('账号冻结操作已失败', '消息', {
                            confirmButtonText: '确定',
                        })
                    }
                });
            },
            handleToDelete(index,row){
                this.$axios.post('/api2/admin/deleteUser',{
                    email : row.email
                }).then((res) =>{
                    let status = res.data.status;
                    if(status === 0){
                        this.$alert('账号删除操作已成功', '消息', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.tableData.splice(index,1);
                            }
                        })
                    }else{
                        this.$alert('账号删除操作已失败', '消息', {
                            confirmButtonText: '确定',
                        })
                    }
                });
            }
        }
    }
</script>

<style scoped>
  .page{
      margin-top: 20px;
  }
</style>