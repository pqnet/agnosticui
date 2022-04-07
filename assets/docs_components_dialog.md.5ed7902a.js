import{_ as m,a as q,b as v}from"./stackblitz.47d6b85c.js";import{_ as y,a as b,b as h,c as f}from"./Angular-icon.86c96dc8.js";import"./common.min.821ee339.js";import"./index.56618267.js";import{_ as w,h as x,D as _,I as B,r as c,o as i,c as k,e as s,w as p,a as n,b as a,d as r}from"./app.061b21d2.js";const D={name:"DialogExamples",components:{Button:x,Dialog:_,Input:B},setup(){let t=null;return{openDialog:()=>{t&&t.show()},assignDialogRef:o=>{t=o}}}},A=n("h3",null,"Dialog",-1),I=n("p",{class:"mbe24"},[a(" The following button opens the dialog because we've obtained a dialog "),n("code",null,"instance"),a(" handle via the "),n("code",null,'@instance="assignDialogRef"'),a(" event hook. This is Vue syntax but the other framework implementations emit the "),n("code",null,"instance"),a(" event similarly: ")],-1),R=a(" Open dialog via dialogRef "),C=n("p",{class:"mbs24 mbe16"},[a(" The following also opens because a11y-dialog will bind to element with "),n("code",null,"data-a11y-dialog-show"),a(" attribute: ")],-1),T=n("button",null,null,-1),S=a(" Open the dialog via data attribute "),U=a(" My Dialog "),E=n("p",{class:"mbs16 mbe16"}," Fill in the form below to receive our newsletter! ",-1),N={class:"dialog-form-demo"},M=n("div",{class:"mbe16"},null,-1),V=a(" Sign Up ");function j(t,l,u,o,Y,z){const e=c("Button"),g=c("Input"),d=c("Dialog");return i(),k("section",null,[A,I,s(e,{mode:"primary","is-bordered":!0,"is-block":!0,"is-rounded":!0,type:"button",onClick:o.openDialog},{default:p(()=>[R]),_:1},8,["onClick"]),C,T,s(e,{type:"button","data-a11y-dialog-show":"a11y-dialog",mode:"primary","is-bordered":!0,"is-block":!0,"is-rounded":!0},{default:p(()=>[S]),_:1}),s(d,{id:"a11y-dialog","dialog-root":"body","is-animation-fade-in":!0,"is-animation-slide-up":!0,role:"dialog","class-names":{title:"h4 mbe18 flex justify-center"},onInstance:o.assignDialogRef},{title:p(()=>[U]),default:p(()=>[E,n("form",N,[s(g,{"is-rounded":!0,label:"Email (required)",type:"email",name:"EMAIL",id:"email",placeholder:"email@example.com",required:""}),M,s(e,{type:"submit",mode:"primary","is-rounded":!0,"is-block":!0},{default:p(()=>[V]),_:1})])]),_:1},8,["onInstance"])])}var L=w(D,[["render",j]]);const O=r('<h1 id="dialog" tabindex="-1">Dialog <a class="header-anchor" href="#dialog" aria-hidden="true">#</a></h1><p>AgnosticUI&#39;s <a href="https://www.w3.org/TR/wai-aria-practices/#dialog_modal" target="_blank" rel="noopener noreferrer">Dialog</a> component wraps Kitty Giraudel&#39;s <a href="https://github.com/KittyGiraudel/a11y-dialog" target="_blank" rel="noopener noreferrer">a11y-dialog</a> \u2014 an accessible and inclusive dialog component that has been battle tested over several versions to date.</p><div class="mbs24"></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="mbe24"></div>',5),P=r('<div class="mbe32"></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="flex mbs40 mbe24"><a href="https://astro.build/" class="flex-shrink-0" target="_blank"><img style="width:var(--fluid-80);" src="'+m+'" alt="astro logo"></a><p class="mis16">React, Vue, and Svelte examples on a single playground page \u{1F680} \u{1F4A5}</p></div><div class="playgrounds flex mbe32"><a class="btn btn-rounded" style="background-color:var(--agnostic-dark);color:var(--agnostic-light);" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Dialog?file=/README.md" target="_blank"><img src="'+q+'" alt="codesandbox logo" class="mie8"> View in CodeSandbox </a><a class="btn btn-rounded" style="background-color:var(--agnostic-primary);color:var(--agnostic-light);" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Dialog?file=/README.md" target="_blank"><img src="'+v+'" alt="Stackblitz logo" class="mie4"> View in Stackblitz </a></div><p>Note that by default <code>Dialog</code> will use <code>role=&quot;dialog&quot;</code> and behave like a <em>dialog</em>. This means that in addition to the open/close trigger button dismissing the dialog, you can also click <code>ESC</code> or click outside the dialog e.g. on the overlay and the dialog will be dismissed.</p><div class="mbe24"></div><p>If you&#39;d like a <span class="quoted">sticky dialog</span> that only closes by toggling the trigger button and/or a close button you&#39;ve setup, you can pass <code>role=&quot;alertdialog&quot;</code> and <code>ESC</code> or click outside the dialog will NOT dismiss the dialog. Read more about this on <a href="https://a11y-dialog.netlify.app/advanced/alert-dialog" target="_blank" rel="noopener noreferrer">a11y-dialog&#39;s alertdialog docs page</a>.</p><div class="flex"><h3 id="react" tabindex="-1"><img src="'+y+`" alt="react logo">React </h3></div><details class="disclose disclose-bordered"><summary class="disclose-title">View source</summary><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/esm/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">YourComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dialog <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dialog2 <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dialogPropsDefault <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;ag-dialog-test&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Dialog Test&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">classNames</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Note we don&#39;t have to pass in ALL classNames props and those</span>
      <span class="token comment">// not included will fallback to react-a11y-dialog&#39;s defaults</span>
      <span class="token comment">// See https://github.com/KittyGiraudel/react-a11y-dialog#api</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;h3 mbe18 h4 mbe18 flex justify-center&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> dialog<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isBordered</span> <span class="token attr-name">isRounded</span> <span class="token attr-name">isBlock</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Open the dialog</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span>
          <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>dialogPropsDefault<span class="token punctuation">}</span></span>
          <span class="token attr-name">dialogRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">dialogInstance</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>dialog<span class="token punctuation">.</span>current <span class="token operator">=</span> dialogInstance<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">isAnimationSlideUp</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe16<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-example-description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            Fill in the form below to receive our newsletter!
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-form-demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">isRounded</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Email (required)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>EMAIL<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email@example.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe16<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isRounded</span> <span class="token attr-name">isBlock</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Sign Up</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dialog</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> dialog2<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isBordered</span> <span class="token attr-name">isRounded</span> <span class="token attr-name">isBlock</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Open dialog 2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span>
          <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>dialogPropsDefault<span class="token punctuation">}</span></span>
          <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-2<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Dialog \u2014 Custom Close Button<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">dialogRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">instance</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>dialog2<span class="token punctuation">.</span>current <span class="token operator">=</span> instance<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">classNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;h4 mbe18&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">closeButton</span><span class="token operator">:</span> <span class="token string">&#39;close-button-demo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">isAnimationFadeIn</span>
          <span class="token attr-name">isAnimationSlideUp</span>
          <span class="token attr-name">closeButtonPosition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>last<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">closeButtonContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>faux<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isRounded</span> <span class="token attr-name">isBordered</span> <span class="token attr-name">isBlock</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Cancel</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span></span>
        <span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe16<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-example-description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            The </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">close-button-demo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> class is in App.css (for the Cancel button at bottom).  Otherwise, we use an AgnosticUI button of </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">type=&quot;faux</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> which generates a div that looks like a button. As </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">react-a11y-dialog</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> generates its own button
            around </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">closeButtonContent</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">, this prevents an unwanted nested buttons situation.
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">You&#39;ll also notice that this dialog did not </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>quoted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">slide up</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> as we have not passed in true to </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">isAnimationSlideUp</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> and this animation defaults to false. The other animation is </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">isAnimationFadeIn</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> which defaults to true. You can set it </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">false</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> if you wish to remove it.
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-form-demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">isRounded</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Email (required)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>EMAIL<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email@example.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe16<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isRounded</span> <span class="token attr-name">isBlock</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Sign Up</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dialog</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details><p>React: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Dialog.tsx" target="_blank" rel="noopener noreferrer">component source</a></p><div class="mbe32"></div><div class="flex"><h3 id="vue-3" tabindex="-1"><img src="`+b+`" alt="Vue 3 logo">Vue 3 </h3></div><details class="disclose disclose-bordered"><summary class="disclose-title">View source</summary><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe40<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h4 mbe32 flex items-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
        <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>24<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>24<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/assets/Vue-icon.svg<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vue logo<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mie12<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>Vue 3 Dialog
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:is-bordered</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:is-block</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:is-rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openDialog<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        Open the dialog
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dialog</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vue-dialog<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">dialog-root</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#portal-root<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:is-animation-fade-in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:is-animation-slide-up</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
          title: <span class="token punctuation">&#39;</span>h4 mbe18 flex justify-center<span class="token punctuation">&#39;</span>,
        }<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@instance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assignDialogRef<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">&gt;</span></span>
          My Dialog 1
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe16<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-example-description<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          Fill in the form below to receive our newsletter!
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-form-demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>
            <span class="token attr-name">:is-rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Email (required)<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>EMAIL<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email@example.com<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">required</span>
          <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe16<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:is-rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:is-block</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">&gt;</span></span>
            Sign Up
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dialog</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:is-bordered</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:is-block</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:is-rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openDialog2<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        Open dialog 2
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dialog</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2vue2dialog<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">dialog-root</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#portal-root<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">close-button-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>My close button label<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">close-button-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>last<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alertdialog<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
          container: styles[<span class="token punctuation">&#39;</span>my-dialog-container<span class="token punctuation">&#39;</span>],
          overlay: styles[<span class="token punctuation">&#39;</span>my-dialog-overlay<span class="token punctuation">&#39;</span>],
          document: styles[<span class="token punctuation">&#39;</span>my-dialog-content<span class="token punctuation">&#39;</span>],
          title: <span class="token punctuation">&#39;</span>h4 mbe18 flex justify-center<span class="token punctuation">&#39;</span>,
          closeButton: styles[<span class="token punctuation">&#39;</span>close-button-demo<span class="token punctuation">&#39;</span>],
        }<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@instance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assignDialogRef2<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">&gt;</span></span>
          Dialog \u2014 Custom Close Button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe16<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-example-description<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          For the cancel button we have used an AgnosticUI <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> of type <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>type=&quot;faux<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>
          This generates a div that looks like a button. As <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>vue-a11y-dialog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> generates its own
          button around <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>closeButtonContent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>, this prevents an unwanted nested buttons situation.
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          You&#39;ll also notice that this dialog did not <span class="token entity named-entity" title="\u201C">&amp;ldquo;</span>slide up<span class="token entity named-entity" title="\u201D">&amp;rdquo;</span> or <span class="token entity named-entity" title="\u201C">&amp;ldquo;</span>fade in<span class="token entity named-entity" title="\u201D">&amp;rdquo;</span>
          as we did NOT pass in either <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>:is-animation-fade-in=&quot;true&quot;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> or <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>:is-animation-slide-up=&quot;true&quot;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>.
          Both of these default to <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>.
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          Lastly, you&#39;ll note that the role is <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>alertdialog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> which results in opting out of
          ESC closing the dialog.
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-form-demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>
            <span class="token attr-name">:is-rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Email (required)<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>EMAIL<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email@example.com<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">required</span>
          <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe16<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:is-rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:is-block</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">&gt;</span></span>
            Sign Up
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#closeButtonContent</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>faux<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:is-rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:is-bordered</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:is-block</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">&gt;</span></span>
            Cancel
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dialog</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCssModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// Components CSS</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dialog<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> styles <span class="token operator">=</span> <span class="token function">useCssModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> dialog <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> dialog2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">openDialog</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;openDialog&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>dialog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">openDialog2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;openDialog2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>dialog2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dialog2<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">assignDialogRef</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">instance</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;assignDialogRef called...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dialog <span class="token operator">=</span> instance<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">assignDialogRef2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">instance</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;assignDialogRef2 called...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dialog2 <span class="token operator">=</span> instance<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">module</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.close-button-demo</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.my-dialog-container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token comment">/* This is just to override the silly centered app demo css :) */</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my-dialog-overlay</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>43<span class="token punctuation">,</span> 46<span class="token punctuation">,</span> 56<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> fade-in 200ms both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my-dialog-overlay,
.my-dialog-container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Crucial\u2014dialog w/not hide visually without this rule */</span>
<span class="token selector">.my-dialog-container[aria-hidden=&quot;true&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my-dialog-content</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my-close-button</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.1875rem<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #036dc9<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #036dc9<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my-dialog-title</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 300<span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 0.005em<span class="token punctuation">;</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> 0.25rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><p>Vue 3: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Dialog.vue" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/examples/src/App.vue#L225" target="_blank" rel="noopener noreferrer">examples</a></p><div class="mbe24"></div><div class="flex"><h3 id="svelte" tabindex="-1"><img src="`+h+`" alt="Svelte logo">Svelte </h3></div><div class="mbe32"></div><details class="disclose disclose-bordered"><summary class="disclose-title">View source</summary><p><strong>Please consider Svelte Dialog experimental and not yet ready for production until we can add <a href="https://github.com/AgnosticUI/svelte-a11y-dialog/issues/1" target="_blank" rel="noopener noreferrer">missing tests</a></strong> \u2014 tl;dr is we&#39;d like to write tests utilizing Cypress&#39;s component testing framework but we need to await an upcoming Vite + Cypress plugins to do so.</p><p>In your main <code>app.html</code>, add a container where your dialog will be rendered into \u2014 <code>dialog-root</code> in this example:</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>svelte<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>%svelte.body%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="mbe16"></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token string">&#39;agnostic-svelte/css/common.min.css&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-svelte&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> dialogInstance<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">assignDialogInstance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    dialogInstance <span class="token operator">=</span> ev<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">openDialog</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dialogInstance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dialogInstance<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container flex flex-column items-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Dialog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    The following opens because we&#39;ve assigned a dialog <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>ref<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>:
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">isBlock</span>
    <span class="token attr-name">isBordered</span>
    <span class="token attr-name">isRounded</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{openDialog}</span>
  <span class="token punctuation">&gt;</span></span>
    Open dialog via dialogRef
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dialog</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a11y-dialog<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">dialogRoot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#dialog-root<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">closeButtonLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>My close button label<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">closeButtonPosition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>last<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">titleId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uniqueTitleId<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">classNames</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{{</span>
      <span class="token attr-name"><span class="token namespace">title:</span></span> <span class="token attr-name">&#39;h4</span> <span class="token attr-name">mbe18</span> <span class="token attr-name">flex</span> <span class="token attr-name">justify-center&#39;</span>
    <span class="token attr-name">}}</span>
    <span class="token attr-name">isAnimationFadeIn</span>
    <span class="token attr-name">isAnimationSlideUp</span>
    <span class="token attr-name"><span class="token namespace">on:</span>instance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{assignDialogInstance}</span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      My Dialog
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe16<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-example-description<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Fill in the form below to receive our newsletter!
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-form-demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>
        <span class="token attr-name">isRounded</span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Email (required)<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>EMAIL<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email@example.com<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">required</span>
      <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe16<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">isRounded</span>
        <span class="token attr-name">isBlock</span>
      <span class="token punctuation">&gt;</span></span>
        Sign Up
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dialog</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><p>Svelte: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Dialog/Dialog.svelte" target="_blank" rel="noopener noreferrer">component source</a></p><div class="mbe24"></div><div class="flex"><h3 id="angular" tabindex="-1"><img src="`+f+`" alt="Angular logo">Angular (Experimental) </h3></div><p><strong>Please consider Angular Dialog experimental and not yet ready for production</strong></p><details class="disclose disclose-bordered"><summary class="disclose-title">View source</summary><div class="mbe16"></div><p>In your Angular configuration (likely <code>angular.json</code>) ensure you&#39;re including the common AgnosticUI styles:</p><div class="mbe16"></div><p><code> &quot;styles&quot;: [&quot;agnostic-angular/common.min.css&quot;],</code></p><div class="mbe24"></div><p>Add AgnosticUI&#39;s <code>AgModule</code> module:</p><div class="language-js"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/platform-browser&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;agnostic-angular&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AppComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.component&#39;</span><span class="token punctuation">;</span>

@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">declarations</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>BrowserModule<span class="token punctuation">,</span> AgModule<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bootstrap</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>Now you can use in your components:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;your-component&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  &lt;section&gt;
    &lt;h2&gt;Dialog&lt;/h2&gt;
    &lt;ag-button mode=&quot;primary&quot;
               [isBordered]=&quot;true&quot;
               [isBlock]=&quot;true&quot;
               [isRounded]=&quot;true&quot;
               type=&quot;button&quot;
               data-test-id=&quot;dataA11yBtn&quot;
               data-a11y-dialog-show=&quot;a11y-dialog&quot;&gt;
      Open the dialog via data attribute
    &lt;/ag-button&gt;
    &lt;div class=&quot;mbe16&quot;&gt;&lt;/div&gt;
    &lt;ag-button mode=&quot;primary&quot;
               [isBordered]=&quot;true&quot;
               [isBlock]=&quot;true&quot;
               [isRounded]=&quot;true&quot;
               (click)=&quot;openDialog()&quot;
               type=&quot;button&quot;&gt;
      Open dialog via instance
    &lt;/ag-button&gt;
    &lt;ng-template #main&gt;
      &lt;p class=&quot;mbs16 mbe16&quot;
         id=&quot;dialog-example-description&quot;&gt;
        Fill in the form below to receive our newsletter!
      &lt;/p&gt;
      &lt;form class=&quot;dialog-form-demo&quot;&gt;
        &lt;ag-input [isRounded]=&quot;true&quot;
                  label=&quot;Email (required)&quot;
                  type=&quot;email&quot;
                  name=&quot;EMAIL&quot;
                  id=&quot;email&quot;
                  placeholder=&quot;email@example.com&quot;
                  required&gt;&lt;/ag-input&gt;
        &lt;div class=&quot;mbe16&quot;&gt;&lt;/div&gt;
        &lt;ag-button type=&quot;submit&quot;
                   mode=&quot;primary&quot;
                   [isRounded]=&quot;true&quot;
                   [isBlock]=&quot;true&quot;&gt;Sign Up&lt;/ag-button&gt;
      &lt;/form&gt;
    &lt;/ng-template&gt;
    &lt;ng-template #title&gt;
      &lt;span data-test-id=&quot;dialogTitle&quot;&gt;A11yDialog Test&lt;/span&gt;
    &lt;/ng-template&gt;
    &lt;ng-template #closeButtonFirst&gt;
      &lt;span&gt;Close (only appears if closeButtonPosition=&quot;first&quot; but that&#39;s the default)&lt;/span&gt;
    &lt;/ng-template&gt;
    &lt;ng-template #closeButtonLast&gt;
      &lt;ag-close [isFaux]=&quot;true&quot;
                size=&quot;xlarge&quot;&gt;&lt;/ag-close&gt;
    &lt;/ng-template&gt;
    &lt;ag-dialog id=&quot;a11y-dialog&quot;
               appRoot=&quot;#main&quot;
               dialogRoot=&quot;#dialog-root&quot;
               [isAnimationFadeIn]=&quot;true&quot;
               [isAnimationSlideUp]=&quot;true&quot;
               closeButtonPosition=&quot;last&quot;
               (instance)=&quot;assignDialogInstance($event)&quot;
               [closeButtonFirstTemplate]=&quot;closeButtonFirst&quot;
               [closeButtonLastTemplate]=&quot;closeButtonLast&quot;
               [mainTemplate]=&quot;main&quot;
               [titleTemplate]=&quot;title&quot;&gt;
    &lt;/ag-dialog&gt;
  &lt;/section&gt;
  &lt;section&gt;
    &lt;h2&gt;Dialog 2&lt;/h2&gt;
    &lt;ag-button mode=&quot;primary&quot;
               [isBordered]=&quot;true&quot;
               [isBlock]=&quot;true&quot;
               [isRounded]=&quot;true&quot;
               type=&quot;button&quot;
               data-a11y-dialog-show=&quot;a11y-dialog2&quot;&gt;
      Open dialog 2
    &lt;/ag-button&gt;
    &lt;ng-template #main2&gt;
      &lt;p class=&quot;mbs16 mbe16&quot;
         id=&quot;dialog-example-description&quot;&gt;
        The &lt;code&gt;close-button-demo&lt;/code&gt; class is in App.css (for the Cancel button at bottom).
        Otherwise, we use an AgnosticUI button of &lt;code&gt;type=&quot;faux&lt;/code&gt; which generates a div that
        looks like a button. As &lt;code&gt;angular-a11y-dialog&lt;/code&gt; generates its own button
        around &lt;code&gt;closeButtonContent&lt;/code&gt;, this prevents an unwanted nested buttons situation.
      &lt;/p&gt;
      &lt;p class=&quot;mbe16&quot;&gt;
        You&#39;ll also notice that this dialog did not &lt;span class=&quot;quoted&quot;&gt;slide up&lt;/span&gt; or &lt;span class=&quot;quoted&quot;&gt;fade in&lt;/span&gt;
        as we did NOT pass in either &lt;code&gt;isAnimationFadeIn&lt;/code&gt; or &lt;code&gt;isAnimationSlideUp&lt;/code&gt;.
        Both of these default to &lt;code&gt;false&lt;/code&gt;.
      &lt;/p&gt;
      &lt;form class=&quot;dialog-form-demo&quot;&gt;
        &lt;ag-input [isRounded]=&quot;true&quot;
                  label=&quot;Email (required)&quot;
                  type=&quot;email&quot;
                  name=&quot;EMAIL&quot;
                  id=&quot;email&quot;
                  placeholder=&quot;email@example.com&quot;
                  required&gt;&lt;/ag-input&gt;
        &lt;div class=&quot;mbe16&quot;&gt;&lt;/div&gt;
        &lt;ag-button type=&quot;submit&quot;
                   mode=&quot;primary&quot;
                   [isRounded]=&quot;true&quot;
                   [isBlock]=&quot;true&quot;&gt;Sign Up&lt;/ag-button&gt;
      &lt;/form&gt;
    &lt;/ng-template&gt;
    &lt;ng-template #title2&gt;Dialog \u2014 Custom Close Button&lt;/ng-template&gt;
    &lt;ng-template #closeButtonLast2&gt;
      &lt;ag-button type=&quot;faux&quot;
                 [isRounded]=&quot;true&quot;
                 [isBordered]=&quot;true&quot;
                 [isBlock]=&quot;true&quot;&gt;Cancel&lt;/ag-button&gt;
    &lt;/ng-template&gt;
    &lt;ag-dialog id=&quot;a11y-dialog2&quot;
               appRoot=&quot;#main&quot;
               dialogRoot=&quot;#dialog-root&quot;
               closeButtonPosition=&quot;last&quot;
               [classNames]=&quot;{
                container: &#39;my-dialog-container&#39;,
                overlay: &#39;my-dialog-overlay&#39;,
                document: &#39;my-dialog-content&#39;,
                title: &#39;h4 mbe18&#39;,
                closeButton: &#39;close-button-demo&#39;
               }&quot;
               [closeButtonLastTemplate]=&quot;closeButtonLast2&quot;
               [mainTemplate]=&quot;main2&quot;
               [titleTemplate]=&quot;title2&quot;&gt;
    &lt;/ag-dialog&gt;
  &lt;/section&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">YourComponent</span> <span class="token punctuation">{</span>
  dialogInstance<span class="token operator">!</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
  <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dialogInstance<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">assignDialogInstance</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">instance</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dialogInstance <span class="token operator">=</span> instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details><p>Angular: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/dialog.component.ts" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/apps/examples/src/app/app.component.html#L838" target="_blank" rel="noopener noreferrer">example use</a></p><div class="mbe32"></div><h2 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-hidden="true">#</a></h2><p>You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, and Angular (experimental). The following will set this up locally:</p><div class="language-shell"><pre><code><span class="token function">git</span> clone git@github.com:AgnosticUI/agnosticui.git
<span class="token builtin class-name">cd</span> agnosticui <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> i
<span class="token comment"># You can then run any of the top-level scripts:</span>
<span class="token function">npm</span> run start:react <span class="token comment"># or</span>
<span class="token function">yarn</span> start:vue <span class="token comment"># or</span>
<span class="token function">yarn</span> start:angular <span class="token comment"># or</span>
<span class="token function">yarn</span> start:svelte
</code></pre></div><p>See <a href="https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#usage" target="_blank" rel="noopener noreferrer">Running Storybook</a>.</p>`,29),Q='{"title":"Dialog","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/dialog.md","lastUpdated":1649330282636}',F={},W=Object.assign(F,{setup(t){return(l,u)=>(i(),k("div",null,[O,s(L),P]))}});export{Q as __pageData,W as default};