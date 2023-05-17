"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2150],{32594:(e,t,i)=>{i.d(t,{U:()=>a});const a=e=>e.stopPropagation()},73366:(e,t,i)=>{var a=i(17463),n=i(61092),s=i(96762),d=i(68144),l=i(14243);(0,a.Z)([(0,l.Mo)("ha-list-item")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"get",static:!0,key:"styles",value:function(){return[s.W,d.iv`:host{padding-left:var(--mdc-list-side-padding,20px);padding-right:var(--mdc-list-side-padding,20px)}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display)}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}`]}}]}}),n.K)},86630:(e,t,i)=>{var a=i(17463),n=i(34541),s=i(47838),d=i(49412),l=i(3762),o=i(68144),r=i(14243),c=i(38346),u=i(96151);(0,a.Z)([(0,r.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?o.dy`<span class="mdc-select__icon"><slot name="icon"></slot></span>`:o.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,n.Z)((0,s.Z)(i.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)((0,s.Z)(i.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"field",key:"_translationsUpdated",value(){return(0,c.D)((async()=>{await(0,u.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value:()=>[l.W,o.iv`.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}`]}]}}),d.K)},2150:(e,t,i)=>{i.r(t),i.d(t,{HaConversationAgentSelector:()=>h});var a=i(17463),n=i(68144),s=i(14243),d=i(34541),l=i(47838),o=i(47181),r=i(32594),c=i(38346);i(73366),i(86630);const u="__NONE_OPTION__";(0,a.Z)([(0,s.Mo)("ha-conversation-agent-picker")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"language",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_agents",value:void 0},{kind:"method",key:"render",value:function(){var e,t;if(!this._agents)return n.Ld;const i=null!==(e=this.value)&&void 0!==e?e:this.required&&(!this.language||null!==(t=this._agents.find((e=>"homeassistant"===e.id)))&&void 0!==t&&t.supported_languages.includes(this.language))?"homeassistant":u;return n.dy` <ha-select .label="${this.label||this.hass.localize("ui.components.coversation-agent-picker.conversation_agent")}" .value="${i}" .required="${this.required}" .disabled="${this.disabled}" @selected="${this._changed}" @closed="${r.U}" fixedMenuPosition naturalMenuWidth> ${this.required?n.Ld:n.dy`<ha-list-item .value="${u}"> ${this.hass.localize("ui.components.coversation-agent-picker.none")} </ha-list-item>`} ${this._agents.map((e=>n.dy`<ha-list-item .value="${e.id}" .disabled="${"*"!==e.supported_languages&&0===e.supported_languages.length}"> ${e.name} </ha-list-item>`))} </ha-select> `}},{kind:"method",key:"willUpdate",value:function(e){(0,d.Z)((0,l.Z)(i.prototype),"willUpdate",this).call(this,e),this.hasUpdated?e.has("language")&&this._debouncedUpdateAgents():this._updateAgents()}},{kind:"field",key:"_debouncedUpdateAgents",value(){return(0,c.D)((()=>this._updateAgents()),500)}},{kind:"method",key:"_updateAgents",value:async function(){const{agents:e}=await(t=this.hass,i=this.language,a=this.hass.config.country||void 0,t.callWS({type:"conversation/agent/list",language:i,country:a}));var t,i,a;if(this._agents=e,!this.value)return;const n=e.find((e=>e.id===this.value));(0,o.B)(this,"supported-languages-changed",{value:null==n?void 0:n.supported_languages}),(!n||"*"!==n.supported_languages&&0===n.supported_languages.length)&&(this.value=void 0,(0,o.B)(this,"value-changed",{value:this.value}))}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`ha-select{width:100%}`}},{kind:"method",key:"_changed",value:function(e){var t;const i=e.target;!this.hass||""===i.value||i.value===this.value||void 0===this.value&&i.value===u||(this.value=i.value===u?void 0:i.value,(0,o.B)(this,"value-changed",{value:this.value}),(0,o.B)(this,"supported-languages-changed",{value:null===(t=this._agents.find((e=>e.id===this.value)))||void 0===t?void 0:t.supported_languages}))}}]}}),n.oi);let h=(0,a.Z)([(0,s.Mo)("ha-selector-conversation_agent")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"method",key:"render",value:function(){var e,t;return n.dy`<ha-conversation-agent-picker .hass="${this.hass}" .value="${this.value}" .language="${(null===(e=this.selector.conversation_agent)||void 0===e?void 0:e.language)||(null===(t=this.context)||void 0===t?void 0:t.language)}" .label="${this.label}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required}"></ha-conversation-agent-picker>`}},{kind:"field",static:!0,key:"styles",value:()=>n.iv`ha-conversation-agent-picker{width:100%}`}]}}),n.oi)}}]);
//# sourceMappingURL=2150-1ffXfjkMmLs.js.map