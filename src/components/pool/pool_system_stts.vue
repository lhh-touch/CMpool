<template>
  <div class="system-stts" >

        <!--<el-header>
            <h1>our pool</h1>
        </el-header>-->
        <el-main style="margin: 0 auto;">
            <el-table
            :data="tableData"
            style="width: 100%"
            header-align='center'
            :header-row-class-name = 'headerStyle'
            @row-click="skip"
            @cell-mouse-enter="cursor"
            :default-sort = "{prop: 'CoinId', order: 'updatedAt'}"
            >
                <el-table-column
                prop="CoinId"
                :label="$t('pools[0]')"
                sortable
                align="center"
                width="100"
                >
                </el-table-column>
                <el-table-column
                prop="algoId"
                :label="$t('pools[1]')"
                sortable
                width="100">
                </el-table-column>
                <el-table-column
                prop="feePercent"
                :label="$t('pools[2]')"
                sortable
                width ="100"
                >
                </el-table-column>
                <el-table-column
                prop="workerCount"
                :label="$t('pools[3]')"
                sortable
                width ="100"
                >
                </el-table-column>
                <el-table-column
                prop="hashrate"
                :label="$t('pools[4]')"
                sortable
                width ="100"
                >
                </el-table-column>
                <el-table-column
                prop="efficiency"
                :label="$t('pools[5]')"
                sortable
                width ="100"
                >
                </el-table-column>
                <el-table-column
                prop="networkCurrentBlockRewardAmount"
                :label="$t('pools[6]')"
                sortable
                width ="140"
                >
                </el-table-column>
                <el-table-column
                prop="currentDifficulty"
                :label="$t('pools[7]')"
                sortable
                width ="140"
                >
                </el-table-column>
                <el-table-column
                prop="updatedAt"
                :label="$t('pools[8]')"
                sortable
                width ="140"
                >
                </el-table-column>
        </el-table>
        <el-pagination
            :current-page="currentPage"
            @current-change="currentChange"
            layout="prev, pager, next"
            :total="total">
        </el-pagination>
        </el-main>
        
  </div>
</template>
<script>
import cardAxios from "../../axiosJoggle/cardAxios";
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 2,
      records: "",
      total: 0,
      id:""
    };
  },
  mounted() {
    cardAxios
      .getSystem({
        rows: 6,
        page: 1,
        sidx: "id",
        sord: "ASC",
        records: 1000,
        total: ""
      })
      .then(req => {
        console.log(req);
        this.id = req.data.rows.id
        console.log(req.data.rows.id)
        this.tableData = req.data.rows;
        this.records = req.data.records;
        this.total = req.data.total * 10;
      })
      .catch(error => {});
    this.tableDatas = this.tableData.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  },
  methods: {
    skip(row, event, column) {
      // if (row.CoinId.indexOf) {
        this.$router.push({
          name: 'card',
          params: { id: row.id }
        });
      //   this.$store.state.breadcrumb = row.coin;
      // }
      console.log(row)
    },
    cursor(row, column, cell, event) {
      cell.style.cursor = "pointer";
    },
    headerStyle(row, rowIndex) {
      return "table_head_th";
    },
    currentChange(size) {
      this.currentPage = size;
      // console.log(this.currentPage)
      cardAxios
        .getSystem({
          rows: 6,
          total: 0,
          sidx: "id",
          sord: "ASC",
          page: this.currentPage,
          record: this.records
        })
        .then(req => {
          this.tableData = req.data.rows;
        })
        .catch(error => {});
    }
  }
};
</script>
<style lang="less">
.system-stts {
    .table_head_th {
      text-align: center;
      position: relative;
    }
    .el-table::before {
      height: 0;
    }
    .table_head_th .cell {
      text-align: center;
      width: 120px;
    }
    .table_head_th .caret-wrapper {
      /* margin-top: 10px; */
      position: absolute;
      right: 0;
      top: 0;
    }
    .el-header {
      font-size: 40px;
      text-align: left;
    }

    .el-tabs__nav-scroll {
      padding-left: 22px;
    }
    .el-tabs__item {
        padding-left:20px;
    }

}
</style>



