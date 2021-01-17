(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{205:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),i=(t(0),t(266)),o={id:"rq_launcher",title:"RQ Launcher plugin",sidebar_label:"RQ Launcher plugin"},l={unversionedId:"plugins/rq_launcher",id:"version-1.0/plugins/rq_launcher",isDocsHomePage:!1,title:"RQ Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/rq_launcher.md",slug:"/plugins/rq_launcher",permalink:"/docs/plugins/rq_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/plugins/rq_launcher.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1610921378,sidebar_label:"RQ Launcher plugin",sidebar:"version-1.0/docs",previous:{title:"Ray Launcher plugin",permalink:"/docs/plugins/ray_launcher"},next:{title:"Submitit Launcher plugin",permalink:"/docs/plugins/submitit_launcher"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypi.org/project/hydra-rq-launcher/"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-rq-launcher",alt:"PyPI"}))),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-rq-launcher",alt:"PyPI - License"})),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-rq-launcher",alt:"PyPI - Python Version"})),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-rq-launcher"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-rq-launcher.svg",alt:"PyPI - Downloads"}))),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_rq_launcher/example"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_rq_launcher"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(i.b)("p",null,"The RQ Launcher plugin provides a launcher for distributed execution and job queuing based on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://python-rq.org"}),"Redis Queue (RQ)"),"."),Object(i.b)("p",null,"RQ launcher allows parallelizing across multiple nodes and scheduling jobs in queues. Usage of this plugin requires a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redis.io/topics/quickstart"}),"Redis server"),". When parallelisation on a single node is intended, the Joblib launcher may be preferable, since it works without a database."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-rq-launcher --upgrade\n")),Object(i.b)("p",null,"Usage of this plugin requires a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redis.io/topics/quickstart"}),"Redis server"),"."),Object(i.b)("p",null,"Note that RQ does ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://python-rq.org/docs/#limitations"}),"not support Windows"),"."),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher=rq")," to your command line. Alternatively, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/launcher: rq\n")),Object(i.b)("p",null,"The configuration packaged with the plugin is defined ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_rq_launcher/hydra_plugins/hydra_rq_launcher/config.py"}),"here"),". The default configuration is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=rq --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"rq","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0}),'# @package hydra.launcher\n_target_: hydra_plugins.hydra_rq_launcher.rq_launcher.RQLauncher\nenqueue:\n  job_timeout: null                  # maximum runtime of the job before it\'s killed (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  ttl: null                          # maximum queued time before the job before is discarded (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  result_ttl: null                   # how long successful jobs and their results are kept (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  failure_ttl: null                  # specifies how long failed jobs are kept (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  at_front: false                    # place job at the front of the queue, instead of the back\n  job_id: null                       # job id, will be overidden automatically by a uuid unless specified explicitly\n  description: null                  # description, will be overidden automatically unless specified explicitly\nqueue: default                       # queue name\nredis:\n  host: ${env:REDIS_HOST,localhost}  # host address via REDIS_HOST environment variable, default: localhost\n  port: ${env:REDIS_PORT,6379}       # port via REDIS_PORT environment variable, default: 6379\n  db: ${env:REDIS_DB,0}              # database via REDIS_DB environment variable, default: 0\n  password: ${env:REDIS_PASSWORD,}   # password via REDIS_PASSWORD environment variable, default: no password\n  mock: ${env:REDIS_MOCK,False}      # switch to run without redis server in single thread, for testing purposes only\nstop_after_enqueue: false            # stop after enqueueing by raising custom exception\nwait_polling: 1.0                    # wait time in seconds when polling results\n')),Object(i.b)("p",null,"The plugin is using environment variables to store Redis connection information. The environment variables ",Object(i.b)("inlineCode",{parentName:"p"},"REDIS_HOST"),", ",Object(i.b)("inlineCode",{parentName:"p"},"REDIS_PORT"),", ",Object(i.b)("inlineCode",{parentName:"p"},"REDIS_DB"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"REDIS_PASSWORD"),", are used for the host address, port, database, and password of the server, respectively."),Object(i.b)("p",null,"For example, they might be set as follows when using ",Object(i.b)("inlineCode",{parentName:"p"},"bash")," or ",Object(i.b)("inlineCode",{parentName:"p"},"zsh")," as a shell:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),'export REDIS_HOST="localhost"\nexport REDIS_PORT="6379"\nexport REDIS_DB="0"\nexport REDIS_PASSWORD=""\n')),Object(i.b)("p",null,"Assuming configured environment variables, workers connecting to the Redis server can be launched using:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"rq worker --url redis://:$REDIS_PASSWORD@$REDIS_HOST:$REDIS_PORT/$REDIS_DB\n")),Object(i.b)("p",null,"An ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_rq_launcher/example"}),"example application")," using this launcher is provided in the plugin repository."),Object(i.b)("p",null,"Starting the app with ",Object(i.b)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will enqueue five jobs to be processed by worker instances:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py --multirun task=1,2,3,4,5\n\n[HYDRA] RQ Launcher is enqueuing 5 job(s) in queue : default\n[HYDRA] Sweep output dir : multirun/2020-06-15/18-00-00\n[HYDRA] Enqueued 13b3da4e-03f7-4d16-9ca8-cfb3c48afeae\n[HYDRA]     #1 : task=1\n[HYDRA] Enqueued 00c6a32d-e5a4-432c-a0f3-b9d4ef0dd585\n[HYDRA]     #2 : task=2\n[HYDRA] Enqueued 63b90f27-0711-4c95-8f63-70164fd850df\n[HYDRA]     #3 : task=3\n[HYDRA] Enqueued b1d49825-8b28-4516-90ca-8106477e1eb1\n[HYDRA]     #4 : task=4\n[HYDRA] Enqueued ed96bdaa-087d-4c7f-9ecb-56daf948d5e2\n[HYDRA]     #5 : task=5\n[HYDRA] Finished enqueuing\n[HYDRA] Polling job statuses every 1.0 sec\n")),Object(i.b)("p",null,"Note that any dependencies need to be installed in the Python environment used to run the RQ worker. For serialization of jobs ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cloudpickle/cloudpickle"}),Object(i.b)("inlineCode",{parentName:"a"},"cloudpickle"))," is used."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://python-rq.org/"}),"RQ documentation")," holds further information on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://python-rq.org/docs/monitoring/"}),"job monitoring"),", which can be done via console or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nvie/rq-dashboard"}),"web interfaces"),", and provides ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://python-rq.org/patterns/"}),"patterns")," for worker and exception handling."))}p.isMDXComponent=!0},266:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return t?r.a.createElement(h,l(l({ref:n},s),{},{components:t})):r.a.createElement(h,l({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);