"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7045],{51654:function(t,e,o){o(72791);var l=o(64554),n=o(80184);e.Z=function(t){var e=t.children;return(0,n.jsx)(l.Z,{sx:{border:"1px solid #eaeaea",padding:{lg:"40px",xs:"15px"}},children:e})}},37045:function(t,e,o){o.r(e);var l=o(1413),n=o(72791),a=o(16871),r=o(11135),i=o(25787),_=o(15514),s=o(23814),p=o(32291),c=o(84669),d=o(74794),Z=o(56087),m=o(51654),P=o(33168),u=o(80184),g=_.BR.filter((function(t){return""!==t.logo}));e.default=(0,i.Z)((function(t){return(0,r.Z)((0,l.Z)((0,l.Z)({},s.Je),s.fc))}))((function(t){var e=t.classes,o=(0,a.s0)(),l=(0,P.$)().t;return(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)(p.Z,{label:(0,u.jsx)(n.Fragment,{children:(0,u.jsx)(c.Z,{to:Z.gA.NOTIFICATIONS_ENDPOINTS,label:l("notification_targets")})}),actions:(0,u.jsx)(n.Fragment,{})}),(0,u.jsx)(d.Z,{children:(0,u.jsxs)(m.Z,{children:[(0,u.jsx)("div",{style:{fontSize:16,fontWeight:600,paddingBottom:15},children:l("select_target_type")}),(0,u.jsx)("div",{className:e.iconContainer,children:g.map((function(t){return(0,u.jsxs)("button",{className:e.lambdaNotif,onClick:function(){o("".concat(Z.gA.NOTIFICATIONS_ENDPOINTS_ADD,"/").concat(t.actionTrigger))},children:[(0,u.jsx)("div",{className:e.lambdaNotifIcon,children:(0,u.jsx)("img",{src:t.logo,className:e.logoButton,alt:t.targetTitle})}),(0,u.jsx)("div",{className:e.lambdaNotifTitle,children:(0,u.jsx)("b",{children:t.targetTitle})})]},"icon-".concat(t.targetTitle))}))})]})})]})}))},15514:function(t,e,o){o.d(e,{BR:function(){return g},DD:function(){return f},L:function(){return k},dM:function(){return i},ee:function(){return r},fk:function(){return u},oj:function(){return h}});var l,n=o(4942),a=o(68825),r="notify_postgres",i="notify_mysql",_="notify_kafka",s="notify_amqp",p="notify_mqtt",c="notify_redis",d="notify_nats",Z="notify_elasticsearch",m="notify_webhook",P="notify_nsq",u=function(t){return t.map((function(t){return{service_name:"".concat(t.service,":").concat(t.account_id),name:t.service,account_id:t.account_id,status:t.status}}))},g=[{actionTrigger:r,targetTitle:"PostgreSQL",logo:"/postgres-logo.svg"},{actionTrigger:_,targetTitle:"Kafka",logo:"/kafka-logo.svg"},{actionTrigger:s,targetTitle:"AMQP",logo:"/amqp-logo.svg"},{actionTrigger:p,targetTitle:"MQTT",logo:"/mqtt-logo.svg"},{actionTrigger:c,targetTitle:"Redis",logo:"/redis-logo.svg"},{actionTrigger:d,targetTitle:"NATS",logo:"/nats-logo.svg"},{actionTrigger:i,targetTitle:"Mysql",logo:"/mysql-logo.svg"},{actionTrigger:Z,targetTitle:"Elastic Search",logo:"/elasticsearch-logo.svg"},{actionTrigger:m,targetTitle:"Webhook",logo:"/webhooks-logo.svg"},{actionTrigger:P,targetTitle:"NSQ",logo:"/nsq-logo.svg"}],y=[{name:"queue-dir",label:a.ZP.t("queue_dir"),required:!0,tooltip:a.ZP.t("staging_dir_for_undelivered_message"),type:"string",placeholder:a.ZP.t("enter_queue_dir")},{name:"queue-limit",label:a.ZP.t("queue_limit"),required:!1,tooltip:a.ZP.t("maximum_limit_for_undelivered_message"),type:"number",placeholder:a.ZP.t("enter_queue_limit")},{name:"comment",label:a.ZP.t("comment"),required:!1,type:"comment",placeholder:a.ZP.t("enter_custom_notes")}],f=function(t){return t.filter((function(t){return""!==t.value}))},h=(l={},(0,n.Z)(l,_,[{name:"brokers",label:a.ZP.t("brokers"),required:!0,tooltip:a.ZP.t("comma_separated_list_kafka_broker_adds"),type:"string",placeholder:a.ZP.t("enter_brokers")},{name:"topic",label:a.ZP.t("topic"),tooltip:a.ZP.t("kafka_topic_notif"),type:"string",placeholder:a.ZP.t("enter_topic")},{name:"sasl_username",label:a.ZP.t("SALS_username"),tooltip:a.ZP.t("SALS_username_for_authentication"),type:"string",placeholder:a.ZP.t("enter_SALS_username")},{name:"sasl_password",label:a.ZP.t("SALS_password"),tooltip:a.ZP.t("SALS_password_for_authentication"),type:"string",placeholder:a.ZP.t("enter_SALS_password")},{name:"sasl_mechanism",label:a.ZP.t("SALS_mechanism"),tooltip:a.ZP.t("SALS_mechanism_for_authentication"),type:"string"},{name:"tls_client_auth",label:a.ZP.t("TLS_client_auth"),tooltip:a.ZP.t("client_auth_determines_kafka_policy"),type:"string",placeholder:a.ZP.t("enter_TLS_client_auth")},{name:"sasl",label:"SASL",tooltip:a.ZP.t("set_on_enable_SASL"),type:"on|off"},{name:"tls",label:"TLS",tooltip:a.ZP.t("set_on_to_enalbe_TLS"),type:"on|off"},{name:"tls_skip_verify",label:a.ZP.t("TLS_slip_verify"),tooltip:a.ZP.t("TLS_slip_verify_tooltip"),type:"on|off"},{name:"client_tls_cert",label:a.ZP.t("client_TLS_cert"),tooltip:a.ZP.t("path_to_client_cret"),type:"path",placeholder:a.ZP.t("enter_client_TLS_cert")},{name:"client_tls_key",label:a.ZP.t("client_TLS_key"),tooltip:a.ZP.t("path_to_client_key"),type:"path",placeholder:a.ZP.t("enter_client_TLS_key")},{name:"version",label:"Version",tooltip:a.ZP.t("specify_version_for_kafka_cluster"),type:"string",placeholder:a.ZP.t("enter_kafka_version")}].concat(y)),(0,n.Z)(l,s,[{name:"url",required:!0,label:"URL",tooltip:a.ZP.t("URL_tooltip"),type:"url"},{name:"exchange",label:a.ZP.t("exchange"),tooltip:a.ZP.t("name_of_AMQP_exchange"),type:"string",placeholder:a.ZP.t("enter_exchange")},{name:"exchange_type",label:a.ZP.t("exchange_type"),tooltip:a.ZP.t("AMQP_exchange_type"),type:"string",placeholder:a.ZP.t("enter_exchange_type")},{name:"routing_key",label:a.ZP.t("routing_key"),tooltip:a.ZP.t("routing_key_tooltip"),type:"string",placeholder:a.ZP.t("enter_routing_key")},{name:"mandatory",label:a.ZP.t("mandatory"),tooltip:a.ZP.t("mandatory_tooltip"),type:"on|off"},{name:"durable",label:a.ZP.t("durable"),tooltip:a.ZP.t("durable_tooltip"),type:"on|off"},{name:"no_wait",label:a.ZP.t("no_wait"),tooltip:a.ZP.t("no_wait_tooltip"),type:"on|off"},{name:"internal",label:a.ZP.t("internal"),tooltip:a.ZP.t("internal_tooltip"),type:"on|off"},{name:"auto_deleted",label:a.ZP.t("auto_deleted"),tooltip:a.ZP.t("auto_deleted_tooltip"),type:"on|off"},{name:"delivery_mode",label:a.ZP.t("delivery_mode"),tooltip:a.ZP.t("delivery_mode_tooltip"),type:"number",placeholder:a.ZP.t("enter_delivery_mode")}].concat(y)),(0,n.Z)(l,c,[{name:"address",required:!0,label:a.ZP.t("address"),tooltip:a.ZP.t("address_tooltip"),type:"address",placeholder:a.ZP.t("enter_address")},{name:"key",required:!0,label:a.ZP.t("key"),tooltip:a.ZP.t("key_tooltip"),type:"string",placeholder:a.ZP.t("queue_denter_keyir")},{name:"password",label:a.ZP.t("password"),tooltip:a.ZP.t("redis_server_password"),type:"string",placeholder:a.ZP.t("enter_password")}].concat(y)),(0,n.Z)(l,p,[{name:"broker",required:!0,label:a.ZP.t("broker"),tooltip:a.ZP.t("broker_tooltip"),type:"uri",placeholder:a.ZP.t("enter_brokers")},{name:"topic",required:!0,label:a.ZP.t("topic"),tooltip:a.ZP.t("topic_notif_MQTT"),type:"string",placeholder:a.ZP.t("enter_topic")},{name:"username",label:a.ZP.t("username"),tooltip:a.ZP.t("MQTT_username"),type:"string",placeholder:a.ZP.t("enter_username")},{name:"password",label:a.ZP.t("password"),tooltip:a.ZP.t("MQTT_password_tooltip"),type:"string",placeholder:a.ZP.t("enter_password")},{name:"qos",label:"QOS",tooltip:a.ZP.t("set_quality_service_priority"),type:"number",placeholder:a.ZP.t("enter_QOS")},{name:"keep_alive_interval",label:a.ZP.t("keep_alive_interval"),tooltip:a.ZP.t("keep_alive_interval_tooltip"),type:"duration",placeholder:a.ZP.t("enter_keep_alive_interval")},{name:"reconnect_interval",label:a.ZP.t("reconnect_interval"),tooltip:a.ZP.t("reconnect_interval_tooltip"),type:"duration",placeholder:a.ZP.t("enter_reconnect_interval")}].concat(y)),(0,n.Z)(l,d,[{name:"address",required:!0,label:a.ZP.t("address"),tooltip:a.ZP.t("address_tooltip_NATS"),type:"address",placeholder:a.ZP.t("enter_address")},{name:"subject",required:!0,label:a.ZP.t("subject"),tooltip:a.ZP.t("subject_tooltip"),type:"string",placeholder:a.ZP.t("enter_subject")},{name:"username",label:a.ZP.t("username"),tooltip:a.ZP.t("username_tooltip"),type:"string",placeholder:a.ZP.t("enter_ANTS_username")},{name:"password",label:a.ZP.t("password"),tooltip:a.ZP.t("password_NATS_tooltip"),type:"string",placeholder:a.ZP.t("enter_NATS_password")},{name:"token",label:a.ZP.t("token"),tooltip:a.ZP.t("token_tooltip"),type:"string",placeholder:a.ZP.t("enter_token")},{name:"tls",label:"TLS",tooltip:a.ZP.t("tls_tooltip"),type:"on|off"},{name:"tls_skip_verify",label:a.ZP.t("tls_skip_verify"),tooltip:a.ZP.t("subject_TLS_tooltip"),type:"on|off"},{name:"ping_interval",label:a.ZP.t("ping_interval"),tooltip:a.ZP.t("ping_interval_tooltip"),type:"duration",placeholder:a.ZP.t("enter_ping_interval")},{name:"streaming",label:a.ZP.t("streaming"),tooltip:a.ZP.t("streaming_tooltip"),type:"on|off"},{name:"streaming_async",label:a.ZP.t("streaming_async"),tooltip:a.ZP.t("streaming_async_tooltip"),type:"on|off"},{name:"streaming_max_pub_acks_in_flight",label:a.ZP.t("streaming_max_pub_acks_in_flight"),tooltip:a.ZP.t("streaming_max_pub_acks_in_flight_tooltip"),type:"number",placeholder:a.ZP.t("enter_streaming_max_pub_acks_in_flight")},{name:"streaming_cluster_id",label:a.ZP.t("streaming_cluster_id"),tooltip:a.ZP.t("streaming_cluster_id_tooltip"),type:"string",placeholder:a.ZP.t("enter_streaming_cluster_id")},{name:"cert_authority",label:a.ZP.t("cert_authority"),tooltip:a.ZP.t("cert_authority_tooltip"),type:"string",placeholder:a.ZP.t("enter_cert_authority")},{name:"client_cert",label:a.ZP.t("client_cert"),tooltip:a.ZP.t("client_cert_tooltip"),type:"string",placeholder:a.ZP.t("enter_client_cert")},{name:"client_key",label:a.ZP.t("client_key"),tooltip:a.ZP.t("client_key-tooltip"),type:"string",placeholder:a.ZP.t("enter_client_key")}].concat(y)),(0,n.Z)(l,Z,[{name:"url",required:!0,label:"URL",tooltip:a.ZP.t("url_tooltip"),type:"url",placeholder:a.ZP.t("enter_url")},{name:"index",required:!0,label:a.ZP.t("index"),tooltip:a.ZP.t("index_tooltip"),type:"string",placeholder:a.ZP.t("enter_index")},{name:"format",required:!0,label:a.ZP.t("format"),tooltip:a.ZP.t("format_tooltip"),type:"enum",placeholder:a.ZP.t("enter_format")}].concat(y)),(0,n.Z)(l,m,[{name:"endpoint",required:!0,label:a.ZP.t("endpoint"),tooltip:a.ZP.t("endpoint_tooltip"),type:"url",placeholder:a.ZP.t("enter_endpoit")},{name:"auth_token",label:a.ZP.t("auth_token"),tooltip:a.ZP.t("auth_token_tooltip"),type:"string",placeholder:a.ZP.t("enter_auth_token")}].concat(y)),(0,n.Z)(l,P,[{name:"nsqd_address",required:!0,label:a.ZP.t("nsqd_address"),tooltip:a.ZP.t("nsqd_address_tooltip"),type:"address",placeholder:a.ZP.t("enter_nsqd_address")},{name:"topic",required:!0,label:a.ZP.t("topic"),tooltip:a.ZP.t("topic_tooltip"),type:"string",placeholder:a.ZP.t("enter_topic")},{name:"tls",label:"TLS",tooltip:a.ZP.t("tls_tooltip"),type:"on|off"},{name:"tls_skip_verify",label:a.ZP.t("tls_skip_verify"),tooltip:a.ZP.t("tls_skip_verify_tooltip"),type:"on|off"}].concat(y)),l),b={webhook:"notify_webhook",amqp:"notify_amqp",kafka:"notify_kafka",mqtt:"notify_mqtt",nats:"notify_nats",nsq:"notify_nsq",mysql:"notify_mysql",postgresql:"notify_postgres",elasticsearch:"notify_elasticsearch",redis:"notify_redis"},k=function(t){return b[t]}}}]);
//# sourceMappingURL=7045.fcdc1336.chunk.js.map