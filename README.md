bower install &&
python -m simpleHTTPServer

        <!--<a href="#!" onclick="javascript:signOut();">Sair</a>
        <li hidden$="[[!signedIn]]"><a href="#/feiras">Cadastrar Feiras</a></li>
        <li><a href="#/contato">Dúvidas?  (11) 3791-7315</a></li>
        <li hidden$="[[signedIn]]"><a class="btn waves-effect waves-light orange" onclick="login.open();">Entrar</a></li>
        
        <li hidden$="[[!signedIn]]">
            <a class="dropdown-button" href="#!" data-activates="dropdown_logado">
                <img class="circle responsive-img profile" src="{{user.photoURL}}" width="40px"> {{user.displayName}}
                <i class="material-icons right">arrow_drop_down</i>
            </a>
        </li>

        <ul id="slide-out" class="side-nav">
            <li hidden$="[[!signedIn]]">
                <div class="userView">
                    <img class="background responsive-img" src="../../img/profile_bg.png">
                       <a href="#!user"><img class="circle" src="{{user.photoURL}}"></a>
                    <a href="#!name"><span class="white-text name">{{user.displayName}}</span></a>
                    <a href="#!email"><span class="white-text email">{{user.email}}</span></a>
                </div>
            </li>
            <li hidden$="[[signedIn]]"><a href="#" onclick="login.open()">Entrar</a></li>
            <li hidden$="[[!signedIn]]"><a href="#!" onclick="javascript:signOut();">Sair</a></li>
        </ul>-->
    
        <!-- Fixed navbar -->

        <div class="row">
                        <!-- left -->
                        <div class="col-md-6">
                            <div class="row">
                                <make-a-post></make-a-post>

                                <!-- post -->
                                <div class="col-md-12">
                                    <box-post id="2" content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                                there live the blind texts. Separated they live in Bookmarksgrove right at."
                                        url-image="../../img/3.jpg" show-photo="hidden"></box-post>
                                </div>
                                <!-- end post-->

                                <!-- post -->
                                <div class="col-md-12">
                                    <box-post id="1" content="So, Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at." show-link="hidden" show-photo="hidden"></box-post>
                                </div>
                                <!-- end post-->
                            </div>

                        </div>
                        <!-- end left -->

                        <!-- right -->

                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12">
                                    <box-post id="1" content="I took this photo this morning. What do you guys think?" url-image="../img/5.jpg" show-link="hidden"></box-post>
                                </div>
                                <div class="col-md-12">
                                    <box-post id="1" content="I took this photo this morning. What do you guys think?" url-image="../img/9.jpg" show-link="hidden"></box-post>
                                </div>
                            </div>
                        </div>
                        <!-- end right -->
                    </div>