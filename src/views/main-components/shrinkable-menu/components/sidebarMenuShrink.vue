<style>

</style>
<template>
  <!-- <div style="text-align:center;">
    <Dropdown transfer placement="right">
      <Button type="text" style="width:70px;padding:10px 0;margin-left:-5px;background:transparent;">
        <Icon size="20" :color="iconColor" type="ios-basket"/>
      </Button>
      <DropdownMenu slot="list" style="width:200px;">
        <DropdownItem>1</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div> -->
  <div>
    <template v-for="(item, index) in menuList">
      <div style="text-align:center;" :key="index">
        <Dropdown transfer placement="right" v-if="item.children.length!==1">
          <Button type="text" style="width:70px;padding:10px 0;margin-left:-5px;background:transparent;">
            <Icon size="20" :color="iconColor" :type="item.icon"/>
          </Button>
          <DropdownMenu slot="list" style="width:200px;">
            <template v-for="(child, i) in item.children">
              <DropdownItem :name="child.name" :key="i">
                <Icon :type="child.icon"/>
                <span>{{itemTitle(child)}}</span>
              </DropdownItem>
            </template>
          </DropdownMenu>
        </Dropdown>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'sidebarMenuShrink',
  props: {
    iconColor: {
      type: String,
      default: 'white'
    },
    menuList: Array
  },
  data () {
    return {}
  },
  methods: {
    itemTitle (item) {
      if (typeof item.title === 'object') {
        return this.$t(item.title.i18n)
      } else {
        return item.title
      }
    }
  }
}
</script>
