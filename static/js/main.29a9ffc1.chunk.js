(window["webpackJsonpping-pong-react-app"]=window["webpackJsonpping-pong-react-app"]||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/header.0cff5dd9.jpg"},25:function(e,t,n){e.exports=n.p+"static/media/ping-pong-table.447178eb.png"},26:function(e,t,n){e.exports=n(44)},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),i=n.n(l),c=n(12),o=n(9),s=n(16),u=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e},m=function(e){for(var t=[],n=Math.floor(e.length/(e.length/2));e.length;)t.push(e.splice(0,n));return t},d=function(e,t){return e.filter((function(e){return e.find((function(e){return e.id===t}))}))[0]},h=function(e,t){return e.findIndex((function(e){return e.find((function(e){return e.id===t}))}))},p=function(e,t,n,a){var r=d(e,a),l=h(e,a),i=function(e,t){return e.findIndex((function(e){return e.id!==t}))}(r,a);return function(e,t,n,a){var r=Math.abs(e-t)>=2,l=e>=n||t>=n,i=e>=0,c=!(e>t&&t>=n)||!(Math.abs(e-t)>2),o=!(e>t&&t<n)||!(e>n&&Math.abs(e-t)>2),s=!(t>n)||2===Math.abs(e-t);return a?r&&l&&i&&c&&o&&s&&!(0===e&&0===t):i}(t,function(e,t,n){return e[t][n].score}(e,l,i),n,function(e,t,n){return e[t][n].played}(e,l,i))},f={idCounter:0,players:[],games:[],history:[],roundCounter:1,winningScore:"",settingsView:!0,gamesView:!1,resultsView:!1,roundComplete:!1,tournamentComplete:!1};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e,t){var n=t.newScore,a=t.id,r=function(e,t,n){var a=d(e,t),r=h(e,t),l=function(e,t){return e.findIndex((function(e){return e.id===t}))}(a,t),i=Object(o.a)(e);return i[r][l].score=n,i[r][l].played=!0,i}(e.games,a,+n);return g({},e,r.flatMap((function(e){return e.map((function(e){return e.played}))})).some((function(e){return!e}))?{roundComplete:!1,games:Object(o.a)(r)}:{roundComplete:!0,games:Object(o.a)(r)})},y=function(e,t){switch(t.type){case"NEW_PLAYER":return function(e,t){var n=t.name;return g({},e,{idCounter:e.idCounter+1,players:[].concat(Object(o.a)(e.players),[{id:e.idCounter+1,name:n.trim(),editMode:!1,score:0,played:!1}])})}(e,t);case"EDIT_PLAYER":return function(e,t){var n=t.newName,a=t.id,r=e.players,l=r.findIndex((function(e){return e.id===a}));return r.splice(l,1,g({},r[l],{name:n,editMode:!1})),g({},e,{players:Object(o.a)(r)})}(e,t);case"DELETE_PLAYER":return function(e,t){var n=t.id,a=e.players,r=a.findIndex((function(e){return e.id===n}));return a.splice(r,1),g({},e,{players:Object(o.a)(a)})}(e,t);case"EDIT_MODE":return function(e,t){var n=t.id,a=e.players,r=a.findIndex((function(e){return e.id===n}));return a[r].editMode=!0,g({},e,{players:Object(o.a)(a)})}(e,t);case"START":return function(e,t){var n=t.winningScore,a=e.players,r=m(u(a));return g({},e,{games:Object(o.a)(r),winningScore:n,settingsView:!1,gamesView:!0})}(e,t);case"SETTINGS":return g({},f,{settingsView:!0,gamesView:!1,resultsView:!1});case"TOURNAMENT":return function(e){return g({},e,{settingsView:!1,gamesView:!0,resultsView:!1})}(e);case"RESULTS":return function(e){return g({},e,{settingsView:!1,gamesView:!1,resultsView:!0})}(e);case"SCORE":return E(e,t);case"NEW_ROUND":return function(e){var t=e.games,n=t.map((function(e){return e.reduce((function(e,t){return t.score>e.score?t:e}))})).map((function(e){return g({},e,{played:!1,score:0})})),a=u(n),r=m(a);return g({},e,{games:r,roundCounter:e.roundCounter+1,roundComplete:!1})}(e);case"HISTORY":return function(e){return g({},e,{history:[].concat(Object(o.a)(e.history),[e.games])})}(e);case"END_TOURNAMENT":return function(e){return g({},e,{settingsView:!1,gamesView:!1,resultsView:!0,roundComplete:!1,tournamentComplete:!0})}(e);default:return e}},O=n(22),w=n.n(O),v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.b,N=Object(c.c)(y,f,v(w()())),j=n(3),S=n(4),k=n(5),C=n(7),P=n(6),T=n(8),R=n(2),D=n(24),V={backgroundImage:"url(".concat(n.n(D).a,")")},M=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(C.a)(this,Object(P.a)(t).call(this,e))).handleSettings=n.handleSettings.bind(Object(R.a)(n)),n.handleGames=n.handleGames.bind(Object(R.a)(n)),n.handleResults=n.handleResults.bind(Object(R.a)(n)),n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"handleSettings",value:function(){this.props.handleSettings(this.state)}},{key:"handleGames",value:function(){this.props.handleGames(this.state)}},{key:"handleResults",value:function(){this.props.handleResults(this.state)}},{key:"render",value:function(){var e=this.props,t=e.settingsView,n=e.gamesView,a=e.resultsView;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page-header p-3",style:V},r.a.createElement("h2",{className:"m-2 text-center"},"Ping Pong Tournament Generator"),t?null:r.a.createElement("ul",{className:"nav justify-content-center"},r.a.createElement("li",{onClick:this.handleSettings,className:"nav-item m-2"},"New Tournament"),n||a?null:r.a.createElement("li",{onClick:this.handleResults,className:"nav-item m-2"},"Score Board"))))}}]),t}(a.Component);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){return A({type:"SETTINGS"},e)},F=Object(j.b)((function(e){return{settingsView:e.settingsView,gamesView:e.gamesView,resultsView:e.resultsView}}),(function(e){return{handleSettings:function(t){return e(_(t))},handleGames:function(t){return e(function(e){return A({type:"TOURNAMENT"},e)}(t))},handleResults:function(t){return e(function(e){return A({type:"RESULTS"},e)}(t))}}}))(M),I=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(C.a)(this,Object(P.a)(t).call(this,e))).state={newName:"",error:!1},n.handleEditMode=n.handleEditMode.bind(Object(R.a)(n)),n.handleChange=n.handleChange.bind(Object(R.a)(n)),n.handleNameError=n.handleNameError.bind(Object(R.a)(n)),n.handleEdit=n.handleEdit.bind(Object(R.a)(n)),n.handleDelete=n.handleDelete.bind(Object(R.a)(n)),n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"handleEditMode",value:function(e){var t=this.props.name;this.props.editPlayerMode(this.state,e),this.setState({newName:t})}},{key:"handleChange",value:function(e){this.setState({newName:e.currentTarget.value})}},{key:"handleNameError",value:function(e){var t=this;e.preventDefault(),this.setState({error:!0,newName:""}),setTimeout((function(){return t.setState({error:!1})}),2e3)}},{key:"handleEdit",value:function(e,t){e.preventDefault(),this.props.editPlayer(this.state,t),this.setState({error:!1})}},{key:"handleDelete",value:function(e){this.props.deletePlayer(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.newName,a=t.error,l=this.props,i=l.id,c=l.name,o=l.editMode,s=l.count;return r.a.createElement(r.a.Fragment,null,o?r.a.createElement("li",{className:"list-group-item"},r.a.createElement("form",{onSubmit:function(e){return RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$","g").test(e)}(n)?function(t){return e.handleEdit(t,i)}:this.handleNameError,className:"form"},r.a.createElement("div",{className:"float-left"},r.a.createElement("label",{htmlFor:"editPlayer",className:"help-block"},"Edit Player Name"),r.a.createElement("input",{type:"text",id:"editPlayer",className:"form-control",onChange:this.handleChange,value:n})),r.a.createElement("button",{className:"btn btn-success btn-sm float-right mx-2"},"Done"))):r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"d-inline-block"},s+1," .\xa0 ",c),r.a.createElement("span",{onClick:function(){return e.handleDelete(i)},className:"btn btn-danger btn-sm float-right mx-2"},"Delete"),r.a.createElement("span",{onClick:function(){return e.handleEditMode(i)},className:"btn btn-warning btn-sm float-right mx-2"},"Edit")),a?r.a.createElement("p",{className:"alert alert-danger m-0 rounded-0"},"Please enter a valid name"):null)}}]),t}(a.Component),L=Object(j.b)((function(e){return{players:e.players}}),(function(e){return{editPlayer:function(t,n){return e(function(e,t){return A({type:"EDIT_PLAYER"},e,{id:t})}(t,n))},deletePlayer:function(t){return e(function(e){return{type:"DELETE_PLAYER",id:e}}(t))},editPlayerMode:function(t,n){return e(function(e,t){return A({type:"EDIT_MODE"},e,{id:t})}(t,n))}}}))(I),G=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(C.a)(this,Object(P.a)(t).call(this,e))).state={id:"",name:"",winningScore:11},n.handleChangeName=n.handleChangeName.bind(Object(R.a)(n)),n.handleNameError=n.handleNameError.bind(Object(R.a)(n)),n.handleSubmitName=n.handleSubmitName.bind(Object(R.a)(n)),n.handleWinningScore=n.handleWinningScore.bind(Object(R.a)(n)),n.handlePlayersError=n.handlePlayersError.bind(Object(R.a)(n)),n.handleSubmitPlayers=n.handleSubmitPlayers.bind(Object(R.a)(n)),n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"handleChangeName",value:function(e){this.setState({name:e.currentTarget.value})}},{key:"handleNameError",value:function(e){e.preventDefault(),this.setState({name:""})}},{key:"handleSubmitName",value:function(e){e.preventDefault(),this.setState({name:""}),this.props.handleName(this.state)}},{key:"handleWinningScore",value:function(e){this.setState({winningScore:e.currentTarget.value})}},{key:"handlePlayersError",value:function(e){e.preventDefault()}},{key:"handleSubmitPlayers",value:function(e){e.preventDefault(),this.props.handlePlayers(this.state)}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.winningScore,a=this.props.players,l=function(e){return RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$","g").test(e)}(t.trim()),i=function(e){for(var t=1;t<10;t+=1)if(Math.pow(2,t)===e)return!0;return!1}(a.length);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-5 overflow-auto col-md-12"},r.a.createElement("h3",{className:"text-center mb-3"},"New Tournament"),r.a.createElement("h5",{className:"text-center mb-3"},"Please add the names of all your players"),r.a.createElement("div",{className:"container-settings"},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:l?this.handleSubmitName:this.handleNameError,className:"clearfix"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"names",className:"help-block"},"Add Player"),r.a.createElement("input",{onChange:this.handleChangeName,id:"names",className:"form-control",value:t})),r.a.createElement("button",{type:"submit",className:"btn btn-primary mt-3"},"Add"),l||!t?null:r.a.createElement("p",{className:"alert alert-danger mt-3"},"Please enter a valid name"),i||0===a.length?null:r.a.createElement("p",{className:"alert alert-warning mt-3"},"The number of players must be a power of 2 e.g. 2, 4, 8, 16, 32..."),r.a.createElement("p",{className:"pt-4"},"The winner of the game is the first to reach the winning score (set below). To win, there must be a gap of at least 2 points between opponents.")),r.a.createElement("form",{onSubmit:i?this.handleSubmitPlayers:this.handlePlayersError,className:"form mt-3 p-0"},r.a.createElement("label",{htmlFor:"winningScore",className:"help-block"},"Select winning score"),r.a.createElement("select",{onChange:this.handleWinningScore,className:"custom-select",value:n,id:"winningScore"},r.a.createElement("option",{value:"11"},"11"),r.a.createElement("option",{value:"21"},"21")),r.a.createElement("input",{type:"submit",className:"btn btn-success mt-3",value:"Start"}))),0===a.length?null:r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group mt-3"},a.map((function(e,t){return r.a.createElement(L,{key:e.id,id:e.id,name:e.name,editMode:e.editMode,count:t})})))))))}}]),t}(a.Component),U=Object(j.b)((function(e){return{players:e.players}}),(function(e){return{handleName:function(t){return e(function(e){return A({type:"NEW_PLAYER"},e)}(t))},handlePlayers:function(t){return e(function(e){return A({type:"START"},e)}(t))}}}))(G),W=n(13),Y=n(14),z=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(C.a)(this,Object(P.a)(t).call(this,e))).state={newScore:"",error:!1},n.handleChange=n.handleChange.bind(Object(R.a)(n)),n.handleError=n.handleError.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"handleChange",value:function(e){var t=e.currentTarget.value;this.setState({newScore:t})}},{key:"handleError",value:function(e){e.preventDefault(),this.setState({newScore:""})}},{key:"handleSubmit",value:function(e,t){e.preventDefault(),this.props.handleScore(this.state,t),this.setState({newScore:""})}},{key:"render",value:function(){var e=this,t=this.state.newScore,n=this.props,a=n.id,l=n.score,i=n.played,c=n.winningScore,o=n.games,s=p(o,t,c,a);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Total score"),r.a.createElement("h1",null,l)):r.a.createElement("form",{onSubmit:s?function(t){return e.handleSubmit(t,a)}:this.handleError},r.a.createElement("label",{htmlFor:"score",className:"d-block"},"Add total score"),r.a.createElement("input",{id:"score",onChange:this.handleChange,type:"number",className:"form-control col-sm-4 d-inline-block ".concat(s||!t?"":"border border-danger"),value:t,required:!0}),r.a.createElement("button",{type:"submit",className:"btn m-2"},r.a.createElement(W.a,{icon:Y.b}))))}}]),t}(a.Component),Z=Object(j.b)((function(e){return{winningScore:e.winningScore,games:e.games}}),(function(e){return{handleScore:function(t,n){return e(function(e,t){return A({type:"SCORE"},e,{id:t})}(t,n))}}}))(z),H=n(25),B={backgroundImage:"url(".concat(n.n(H).a,")")},J=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props,t=e.game,n=e.players;return r.a.createElement("div",{className:"game-container"},r.a.createElement("h4",null,t),r.a.createElement("div",{className:"game",style:B},n.map((function(e){return r.a.createElement("div",{key:e.id,className:"player"},r.a.createElement("h5",{className:"pt-2 text-light"},e.name),r.a.createElement(Z,{id:e.id,score:e.score,played:e.played}))}))))}}]),t}(a.Component),Q=Object(j.b)((function(e){return{games:e.games}}))(J),X=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(C.a)(this,Object(P.a)(t).call(this,e))).handleNewRound=n.handleNewRound.bind(Object(R.a)(n)),n.handleFinish=n.handleFinish.bind(Object(R.a)(n)),n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"handleNewRound",value:function(e){e.preventDefault(),this.props.history(),this.props.newRound()}},{key:"handleFinish",value:function(e){e.preventDefault(),this.props.history(),this.props.endTournament()}},{key:"render",value:function(){var e=this.props,t=e.games,n=e.tournamentComplete,a=e.roundCounter,l=e.roundComplete;return n?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"round-title"},1===t.length?"Final":2===t.length?"Semifinals":4===t.length?"Quarterfinals":"Round ".concat(a)),r.a.createElement("p",{className:"text-center p-3"},"Add the total score for a player. Save the score with the orange button. Repeat for each player."),r.a.createElement("div",{className:"round-games",style:1===t.length?{display:"inherit"}:null},t.map((function(e,t){return r.a.createElement(Q,{key:t,game:"Game ".concat(t+1),players:e})}))),r.a.createElement("div",{className:"clearfix"}),r.a.createElement("div",{className:"next-round"},l?1===t.length?r.a.createElement("button",{onClick:this.handleFinish,className:"btn btn-primary"},"Finish"):r.a.createElement("button",{onClick:this.handleNewRound,className:"btn btn-primary"},"Next Round"):null))}}]),t}(a.Component),$=Object(j.b)((function(e){return{games:e.games,winningScore:e.winningScore,tournamentComplete:e.tournamentComplete,roundComplete:e.roundComplete,roundCounter:e.roundCounter}}),(function(e){return{newRound:function(){return e({type:"NEW_ROUND"})},endTournament:function(){return e({type:"END_TOURNAMENT"})},history:function(){return e({type:"HISTORY"})}}}))(X),q=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(C.a)(this,Object(P.a)(t).call(this,e))).handleReset=n.handleReset.bind(Object(R.a)(n)),n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"handleReset",value:function(){this.props.reset()}},{key:"render",value:function(){var e=this.props.history,t=Object(o.a)(e);return t.reverse(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"results"},r.a.createElement("h3",null,"Tournament Results"),t.map((function(t,n){return r.a.createElement("table",{key:n+Math.random(),className:"results-table"},r.a.createElement("thead",{className:"results-thead"},r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"33%"}},0===n?"Final":1===n?"Semifinals":2===n?"Quarterfinals":"Round ".concat(e.length%3)),r.a.createElement("th",null,"Player 1"),r.a.createElement("th",null,"Player 2"))),r.a.createElement("tbody",{className:"results-tbody"},t.map((function(e,t){return r.a.createElement("tr",{key:t+Math.random()},r.a.createElement("th",{style:{width:"33%"}},"Game ",t+1),e.map((function(e){return r.a.createElement("td",{key:e.id,style:{width:"33%"}},e.name," \xa0",r.a.createElement("span",{className:"badge badge-pill badge-warning"},e.score))})))}))))})),r.a.createElement("div",{className:"page-options"},r.a.createElement("button",{onClick:function(){return window.print()},className:"btn btn-primary"},"Print Results"),r.a.createElement("button",{onClick:this.handleReset,className:"btn btn-success"},"Start Over"))))}}]),t}(a.Component),K=Object(j.b)((function(e){return{history:e.history,games:e.games,winningScore:e.winningScore}}),(function(e){return{reset:function(){return e(_())}}}))(q),ee=function(){return r.a.createElement("footer",{className:"page-footer"},r.a.createElement("a",{href:"https://linkedin.com/in/jonathansmithies",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(W.a,{icon:Y.a}),"\xa0\xa0View on LinkedIn"),r.a.createElement("a",{href:"https://github.com/elev8now/Ping-Pong-React-App",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(W.a,{icon:Y.a}),"\xa0\xa0View code on GitHub"))},te=(n(42),n(43),function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props,t=e.settingsView,n=e.gamesView,a=e.resultsView,l=e.tournamentComplete;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),t?r.a.createElement(U,null):null,n&&!l?r.a.createElement($,null):null,a?r.a.createElement(K,null):null,r.a.createElement(ee,null))}}]),t}(a.Component)),ne=Object(j.b)((function(e){return{settingsView:e.settingsView,gamesView:e.gamesView,resultsView:e.resultsView,tournamentComplete:e.tournamentComplete}}))(te);i.a.render(r.a.createElement(j.a,{store:N},r.a.createElement(ne,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.29a9ffc1.chunk.js.map