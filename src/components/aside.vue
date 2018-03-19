<template>
  <div class="wrap">
      <ul>
          <li>
              <router-link to="/myaccount/instrument" class="skip">
                  <i class="fa fa-th-large fa-2x" style="font-size:18px;"></i>
                  <strong>{{$t('aside[0]')}}</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/myaccount/accountSet" class="skip">
                  <i class="fa fa-user fa-fw" style="font-size:20px"></i>
                  <strong>{{$t('aside[1]')}}</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/myaccount/poolServer" class="skip">
                  <i class="fa fa-desktop fa-2x" style="font-size:20px"></i>
                  <strong>{{$t('aside[2]')}}</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/myaccount/miner" class="skip">
                  <i class="fa fa-cogs fa-fw" style="font-size:20px"></i>
                  <strong>{{$t('aside[3]')}}</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/myaccount/Monitor" class="skip">
                  <i class="fa fa-line-chart fa-fw" style="font-size:20px"></i>
                  <strong>{{$t('aside[4]')}}</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/myaccount/remuneration" class="skip">
                  <i class="fa fa-btc fa-fw" style="font-size:20px"></i>
                  <strong>{{$t('aside[5]')}}</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/myaccount/Payment" class="skip">
                  <i class="fa fa-usd fa-fw" style="font-size:20px"></i>
                  <strong>{{$t('aside[6]')}}</strong>
              </router-link>
          </li>
          <li>
              <router-link to="/myaccount/Log" class="skip">
                  <i class="fa fa-book fa-fw" style="font-size:20px"></i>
                  <strong>{{$t('aside[7]')}}</strong>
              </router-link>
          </li>
      </ul>
  </div>
</template>
<script>
</script>
<style>
.wrap {
  background-color: #e1e1e1;
  height: 600px;
  text-align: left;
}
.wrap ul li {
  padding: 15px 20px;
  border-bottom: 1px solid rgb(128, 128, 128);
  /* vertical-align: middle; */
}
.wrap ul li .skip {
  width: 100%;
  color: rgb(128, 128, 128);
  display: inline-block;
}
.wrap ul li:hover {
  background-color: #fff;
}
img {
  width: 25px;
  vertical-align: middle;
}
</style>

