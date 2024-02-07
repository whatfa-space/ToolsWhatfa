// export const dynamic = 'force-dynamic'

export default async function Page() {
  return (
    <div>
      {/* <h4>
        <strong>您的临时电子邮件</strong>
      </h4> */}

      <div className="flex justify-center items-center">
        {/* input inner */}
        <div className="flex border rounded-md">
          <input
            type="text"
            className="input focus:outline-0 rounded-r-none border-r-0 w-full px-2 text-xl font-light"
            placeholder="请输入临时邮箱名"
          />
          <div className="flex flex-col justify-center mx-2">
            <span className=" text-gray-500">
              <strong className="mr-1 font-medium">@</strong>
              whatfa.com
            </span>
          </div>
        </div>

        <button className="btn btn-normal btn-circle btn-neutral ml-2">
          确定
        </button>
      </div>

      {/* 表格 */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>发信人</th>
              <th>主题</th>
              <th>时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>jason aaa@xxx.com</td>
              <td>京津冀</td>
              <td>14:40:54</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
