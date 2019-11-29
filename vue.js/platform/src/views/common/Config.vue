<template>
  <div class="config">
    <p>算子配置信息</p>
    <div class="config-info" v-show="configShow == 'reader-es'">
        <div class="input-box">
            <label>ES_Index:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>ES_Type:</label>
            <input type="text">
        </div>
        <div class="columns">
            <p>Columns</p>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns1</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns2</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns3</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns4</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns5</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns6</span>
            </label>
        </div>
        <div class="input-box">
            <label>TempViewName:</label>
            <input type="text">
        </div>
        <div class="btn-box">
            <button class="btn btn-submit">提交配置</button>
            <button class="btn btn-reset">重置</button>
        </div>
    </div>
    <div class="config-info" v-show="configShow == 'reader-hive'">
        <div class="input-box">
            <label>Hive_DataBase:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>Hive_Table_Name:</label>
            <input type="text">
        </div>
        <div class="columns">
            <p>Columns</p>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns1</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns2</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns3</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns4</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns5</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns6</span>
            </label>
        </div>
        <div class="input-box">
            <label>TempViewName:</label>
            <input type="text">
        </div>
        <div class="btn-box">
            <button class="btn btn-submit">提交配置</button>
            <button class="btn btn-reset">重置</button>
        </div>
    </div>
    <div class="config-info" v-show="configShow == 'reader-mysql'">
        <div class="input-box">
            <label>MySQL_Host:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>MySQL_User:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>MySQL_Password:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>MySQL_Database:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>MySQL_Table_Name:</label>
            <input type="text">
        </div>
        <div class="columns">
            <p>Columns</p>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns1</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns2</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns3</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns4</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns5</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns6</span>
            </label>
        </div>
        <div class="input-box">
            <label>TempViewName:</label>
            <input type="text">
        </div>
        <div class="btn-box">
            <button class="btn btn-submit">提交配置</button>
            <button class="btn btn-reset">重置</button>
        </div>
    </div>
    <div class="config-info" v-show="configShow == 'reader-txt'">
        <div class="input-box">
            <label>File_path:</label>
            <input type="text">
        </div>
        <div class="columns-table">
            <p>Columns:</p>
            <div class="table-col">
                <table>
                    <thead>
                        <tr>
                            <th>列名</th>
                            <th>自定义名称</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>column1</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>column2</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>column3</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>column4</td>
                            <td><input type="text"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="input-box">
            <label>TempViewName:</label>
            <input type="text">
        </div>
        <div class="btn-box">
            <button class="btn btn-submit">提交配置</button>
            <button class="btn btn-reset">重置</button>
        </div>
    </div>
    <div class="config-info" v-show="configShow == 'reader-json'">
        <div class="input-box">
            <label>File_path:</label>
            <input type="text">
        </div>
        <div class="columns-table">
            <p>Columns:</p>
            <div class="table-col">
                <table>
                    <thead>
                        <tr>
                            <th>列名</th>
                            <th>自定义名称</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>column1</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>column2</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>column3</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>column4</td>
                            <td><input type="text"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="input-box">
            <label>TempViewName:</label>
            <input type="text">
        </div>
        <div class="btn-box">
            <button class="btn btn-submit">提交配置</button>
            <button class="btn btn-reset">重置</button>
        </div>
    </div>
    <div class="config-info" v-show="configShow == 'writer-hdfs'">
        <div class="columns">
            <p>Columns</p>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns1</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns2</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns3</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns4</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns5</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns6</span>
            </label>
        </div>
        <div class="input-box">
            <label>File_path:</label>
            <input type="text">
        </div>
        <div class="btn-box">
            <button class="btn btn-submit">提交配置</button>
            <button class="btn btn-reset">重置</button>
        </div>
    </div>
    <div class="config-info" v-show="configShow == 'writer-mysql'">
        <div class="input-box">
            <label>MySQL_Host:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>MySQL_User:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>MySQL_Password:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>MySQL_Database:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>MySQL_Table_Name:</label>
            <input type="text">
        </div>
        <div class="columns">
            <p>Columns</p>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns1</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns2</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns3</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns4</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns5</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns6</span>
            </label>
        </div>
        <div class="btn-box">
            <button class="btn btn-submit">提交配置</button>
            <button class="btn btn-reset">重置</button>
        </div>
    </div>
    <div class="config-info" v-show="configShow == 'writer-hive'">
        <div class="input-box">
            <label>Hive_DataBase:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>Hive_TableName:</label>
            <input type="text">
        </div>
        <div class="columns">
            <p>Columns</p>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns1</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns2</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns3</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns4</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns5</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns6</span>
            </label>
        </div>
        <div class="btn-box">
            <button class="btn btn-submit">提交配置</button>
            <button class="btn btn-reset">重置</button>
        </div>
    </div>
    <div class="config-info" v-show="configShow == 'writer-es'">
        <div class="input-box">
            <label>ES_Index:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>ES_Type:</label>
            <input type="text">
        </div>
        <div class="columns">
            <p>Columns</p>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns1</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns2</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns3</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns4</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns5</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns6</span>
            </label>
        </div>
        <div class="input-box">
            <label>TemViewName:</label>
            <input type="text">
        </div>
        <div class="btn-box">
            <button class="btn btn-submit">提交配置</button>
            <button class="btn btn-reset">重置</button>
        </div>
    </div>
    <div class="config-info" v-show="configShow == 'processor-count'">
        <div class="input-box">
            <label>Count_Column_Name:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>TempViewName:</label>
            <input type="text">
        </div>
        <div class="btn-box">
            <button class="btn btn-submit">提交配置</button>
            <button class="btn btn-reset">重置</button>
        </div>
    </div>
    <div class="config-info" v-show="configShow == 'processor-distinct'">
        <div class="input-box">
            <label>DistinctColumn:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>DistinctColumnName:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>TempViewName:</label>
            <input type="text">
        </div>
        <div class="btn-box">
            <button class="btn btn-submit">提交配置</button>
            <button class="btn btn-reset">重置</button>
        </div>
    </div>
    <div class="config-info" v-show="configShow == 'processor-sort'">
        <div class="columns">
            <p>Columns</p>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns1</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns2</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns3</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns4</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns5</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns6</span>
            </label>
        </div>
        <div class="columns">
            <p>sortColumn</p>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns1</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns2</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns3</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns4</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns5</span>
            </label>
            <label class="labelbox">
                <input type="checkbox">
                <span>columns6</span>
            </label>
        </div>
        <div class="input-box">
            <label>TemViewName:</label>
            <input type="text">
        </div>
        <div class="input-box">
            <label>DistinctColumn:</label>
            <input type="text">
        </div>
        <div class="btn-box">
            <button class="btn btn-submit">提交配置</button>
            <button class="btn btn-reset">重置</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.config {
  width: 400px;
  height: 830px;
  color: #333333;
  padding: 20px;
  font-size: 14px;
  background-color: #fff;
  p {
    margin-top: 0;
    font-size: 16px;
    color: #101010;
  }
  .config-info {
    .columns {
      margin-top: 20px;
      .labelbox {
        display: inline-block;
        height: 32px;
        line-height: 32px;
        width: 142px;
        text-align: center;
        span {
          user-select: none;
        }
      }
      p {
        margin-bottom: 10px;
      }
    }
    .input-box {
      margin-top: 20px;
      label {
        display: inline-block;
        height: 32px;
        line-height: 32px;
        text-align: left;
        color: #101010;
      }
      input {
        display: block;
        width: 260px;
        height: 32px;
        padding: 0 10px;
        border-radius: 2px;
        margin-top: 5px;
      } 
    }
    .columns-table {
      p {
        margin-top: 20px;
        margin-bottom: 10px;
        color: #101010;
      }
      .table-col > table tr th,
      .table-col > table tr td {
        width: 50%;
        text-align: center;
        border: 1px solid #cccccc;
        height: 30px;
      }
      .table-col > table tr td > input {
          width: 100%;
          height: 30px;
          padding: 0 10px;
      }
    } 
    .btn-box {
      margin-top: 20px;
    }
    .btn {
      width: 100px;
      height: 30px;
      color: #333333;
      border-radius: 3px;
      background: linear-gradient(#d7d7d7,#f8f8f8);
      border: 1px solid #ccc;
      transition: all .2s ease;
      margin-right: 55px;
      &:hover {
        background: linear-gradient(#c7c7c7,#f1f1f1);
      }
    }
  }
}  
</style>
