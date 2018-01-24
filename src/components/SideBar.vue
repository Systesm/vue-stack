<template>
    <div data-active-color="white" data-background-color="purple-bliss" data-image="../../static/app-assets/img/sidebar-bg/01.jpg" class="app-sidebar">
        <!-- Sidebar Header starts-->
        <div class="sidebar-header">
            <div class="logo clearfix">
                <router-link to="/" class="logo-text float-left">
                    <div class="logo-img">
                        <img src="@/assets/viettech.png" style="width: 30px; height: 30px;" />
                    </div>
                    <span class="text align-middle">VIETTECH</span>
                </router-link>
                <a id="sidebarToggle" href="javascript:;" class="nav-toggle d-none d-sm-none d-md-none d-lg-block"><i data-toggle="collapsed" class="ft-toggle-left toggle-icon"></i></a><a id="sidebarClose" href="javascript:;" class="nav-close d-block d-md-block d-lg-none d-xl-none"><i class="ft-x"></i></a>
            </div>
        </div>
        <!-- Sidebar Header Ends-->
        <div class="sidebar-content">
            <div class="nav-container">
                <ul id="main-menu-navigation" data-menu="menu-navigation" class="navigation navigation-main">
                    <li class="has-sub nav-item">
                        <a href="#"><i class="ft-anchor"></i><span data-i18n="" class="menu-title">Thành Viên</span></a>
                        <ul class="menu-content">
                            <li>
                                <a href="dashboard1.html" class="menu-item">Thành Viên</a>
                            </li>
                            <li>
                                <a href="dashboard1.html" class="menu-item">Phân Quyền</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sidebar-background"></div>
    </div>
</template>

<script>
import '../../static/app-assets/js/app-sidebar.js'

export default {
  name: 'SideBar'
}
</script>
