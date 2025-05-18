<template>
  <div class="TraceabilityInformationBox">
    <span class="Title"> 溯源详情信息 </span>

    <div class="TraceTable">
      <el-descriptions direction="vertical" :column="4" border>
        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>

        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>

        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>

        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.TraceabilityInformationBox {
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.Title {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

.TraceTable {
  width: 100%;
  height: auto;
  margin: 20px 0;
}
</style>
