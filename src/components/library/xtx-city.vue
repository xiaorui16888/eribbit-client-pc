<template>
    <div class="xtx-city" ref="target">
        <div class="select" @click="toggleDialog" :class="{ active }">
            <span class="placeholder">请选择配送地址</span>
            <span class="value"></span>
            <i class="iconfont icon-angle-down"></i>
        </div>
        <div class="option" v-if="active">
            <div v-if="loading" class="loading"></div>
            <template v-else>
                <span class="ellipsis" v-for="item in currList" :key="item.code">{{ item.name }}</span>
            </template>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import axios from 'axios'
export default {
  name: 'XtxCity',
  setup () {
    // 控制展开收起,默认收起
    const active = ref(false)
    // 所有地区的数据
    const allCityData = ref([])
    // 正在加载数据
    const loading = ref(false)

    const openDialog = () => {
      active.value = true
      loading.value = true
      // 获取地区数据
      getCityData().then(data => {
        allCityData.value = data
        loading.value = false
      })
    }
    const closeDialog = () => {
      active.value = false
    }
    // 切换展开收起
    const toggleDialog = () => {
      if (active.value) closeDialog()
      else openDialog()
    }
    // 点击其他位置隐藏
    const target = ref(null)
    onClickOutside(target, () => {
      closeDialog()
    })

    // 实现计算属性：获取当时显示的地区数组
    const currList = computed(() => {
      // 默认省一级
      const list = allCityData.value
      // TODO 根据点击的省份城市获取对应的列表
      return list
    })

    return { active, allCityData, toggleDialog, target, loading, currList }
  }
}

// 获取省市区的数据函数
const getCityData = () => {
  // 数据：https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json
  // 1.当本地没有缓存，发送请求获取数据
  // 2.当本地有缓存，取本地的数据
  // 返回promise在then获取数据，这里可能是异步操作，也可能是同步操作
  return new Promise((resolve, reject) => {
    // 约定：数据存储在window上的cityData字段
    if (window.cityData) {
      resolve(window.cityData)
    } else {
      const url = 'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
      axios.get(url).then(res => {
        window.cityData = res.data
        resolve(res.data)
      })
    }
  })
}
</script>

<style scoped lang="less">
.xtx-city {
    display: inline-block;
    position: relative;
    z-index: 400;

    .select {
        border: 1px solid #e4e4e4;
        height: 30px;
        padding: 0 5px;
        line-height: 28px;
        cursor: pointer;

        &.active {
            background: #fff;
        }

        .placeholder {
            color: #999;
        }

        .value {
            color: #666;
            font-size: 12px;
        }

        i {
            font-size: 12px;
            margin-left: 5px;
        }
    }

    .option {
        width: 542px;
        border: 1px solid #e4e4e4;
        position: absolute;
        left: 0;
        top: 29px;
        background: #fff;
        min-height: 30px;
        line-height: 30px;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;

        >span {
            width: 130px;
            text-align: center;
            cursor: pointer;
            border-radius: 4px;
            padding: 0 3px;

            &:hover {
                background: #f5f5f5;
            }
        }
    }
}
</style>
