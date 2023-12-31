const ClipboardTip = () => {
  return (
    <details className="collapse collapse-arrow border-[0.5px] border-[#e5e7eb]/60 ">
      <summary className="collapse-title select-none">点击查看介绍</summary>
      <div className="collapse-content">
        <article className="prose">
          <h2>
            在线网络剪切板分享工具网站 -
            轻松分享、复制和保存剪贴板内容，私密剪切板空间
          </h2>
          <h3>简介</h3>
          <p>
            欢迎来到我们的在线剪切板分享工具网站！我们为您提供了一个便捷的平台，让您轻松分享、复制和保存您的剪贴板内容。无需登录或注册，您可以即刻开始使用各项功能，将您的文本、链接或代码片段与他人分享。此外，我们为您带来全新的功能：自定义剪贴板ID！
          </p>
          <h3>主要功能</h3>
          <h4>1. 刷新内容</h4>
          <p>
            在使用我们的在线剪切板分享工具时，您不必担心内容过时。我们提供了“刷新”功能，让您可以随时更新您的剪贴板内容。只需点击刷新按钮，即可将最新的内容呈现给其他用户。
          </p>
          <h4>2. 复制内容</h4>
          <p>
            通过我们的工具，您可以快速复制您的剪贴板内容，使得分享变得简单高效。点击“复制”按钮，您的内容将立即被复制到剪贴板，然后您可以将其粘贴到任何您希望的地方。
          </p>
          <h4>3. 保存内容</h4>
          <p>
            我们理解，有时候您可能希望长期保存您的剪贴板内容。我们提供了“保存”功能，让您可以将重要的信息保存在我们的平台上。无论何时何地，您都可以方便地访问保存的内容。
          </p>
          <h4>4. 加入剪贴板</h4>
          <p>
            现在，您可以为您的剪贴板内容创建一个自定义的ID。通过加入功能，绑定一个个性化的ID，方便您将特定的内容与特定的人群分享。这样，您的剪贴板就成为了您个人或团队的专属分享空间。
          </p>
          <h3>如何使用</h3>
          <ol>
            <li>输入您希望使用的ID并点击加入。</li>
            <li>
              在页面上找到输入框，将您想要分享的文本、链接或代码片段粘贴到输入框中。
            </li>
            <li>点击“刷新”按钮以确保您的内容是最新的。</li>
            <li>点击“复制”按钮将内容复制到剪贴板。</li>
            <li>
              内容输入完成后，点击“保存”按钮。之后在其他设备上打开此链接或此ID即可分享内容。
            </li>
            <li>注意：剪切板保存有效期为1天（每次点击保存将会重新计时1天）</li>
          </ol>
          <h3>开始分享吧！</h3>
          <p>
            我们的在线剪切板分享工具网站提供了简单易用的界面和强大的功能，让您无需繁琐的操作就能轻松分享、复制和保存剪贴板内容，并且现在您还可以拥有属于自己的剪贴板ID。立即使用我们的服务，与朋友、同事和团队成员分享有趣的链接、重要的信息和有用的代码片段吧！
          </p>
        </article>
      </div>
    </details>
  )
}

export default ClipboardTip
