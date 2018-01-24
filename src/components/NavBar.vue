<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-faded">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" data-toggle="collapse" class="navbar-toggle d-lg-none float-left"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
            </div>
            <div class="navbar-container">
                <div id="navbarSupportedContent" class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item mr-2">
                            <a id="navbar-fullscreen" href="javascript:;" class="nav-link apptogglefullscreen">
                                <i class="ft-maximize font-medium-3 blue-grey darken-4"></i>
                                <p class="d-none">fullscreen</p>
                            </a>
                        </li>
                        <li class="dropdown nav-item">
                            <a id="dropdownBasic3" href="#" data-toggle="dropdown" class="nav-link position-relative dropdown-toggle">
                                <i class="ft-user font-medium-3 blue-grey darken-4"></i>
                                <p class="d-none">User Settings</p>
                            </a>
                            <div ngbdropdownmenu="" aria-labelledby="dropdownBasic3" class="dropdown-menu dropdown-menu-right">
                                <a href="javascript:;" class="dropdown-item py-1"><i class="ft-settings mr-2"></i><span>Settings</span></a><a href="javascript:;" class="dropdown-item py-1"><i class="ft-edit mr-2"></i><span>Edit Profile</span></a><a href="javascript:;" class="dropdown-item py-1"><i class="ft-mail mr-2"></i><span>My Inbox</span></a>
                                <div class="dropdown-divider"></div>
                                <a href="" class="dropdown-item"><i class="ft-power mr-2"></i><span>Logout</span></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
