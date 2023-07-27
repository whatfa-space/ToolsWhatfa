import { TagContainer } from '@/components/layout/tag-container'
import { getFeedback } from '@/services/feedback'

export const Feedback = async () => {
  const feedbackList = await getFeedback()
  const res = JSON.stringify(feedbackList)
  return (
    <TagContainer title="留言">
      <div>hello</div>
      {res}
      {feedbackList.map(({ email, content }) => (
        <div>
          {email}
          {content}
        </div>
      ))}
    </TagContainer>
  )
}
