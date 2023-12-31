import { clsxm } from '@/lib/helper/clsx'
import { useCallback, useMemo } from 'react'

interface IPaginationProps {
  page: number
  totalPage: number
  onChange: (page: number) => void
}

//可视数字长度
const VISIBLE_RANGE_LIMIT = 3
const JUMP_LENGTH = 2

export default function Pagination({
  page,
  totalPage,
  onChange,
}: IPaginationProps) {
  const hasPre = useMemo(() => page > 1, [page])
  const hasNext = useMemo(() => page < totalPage, [page, totalPage])
  const showJumpPre = useMemo(() => page - JUMP_LENGTH >= 1, [page])
  const showJumpNext = useMemo(
    () => page + JUMP_LENGTH <= totalPage,
    [page, totalPage]
  )

  const handlePre = () => {
    if (hasPre) {
      onChange(page - 1)
    }
  }

  const handleNext = () => {
    if (hasNext) {
      onChange(page + 1)
    }
  }

  const handleChange = useCallback(
    (page: number) => {
      onChange(page)
    },
    [onChange]
  )

  const handleJumpPre = useCallback(() => {
    handleChange(page - JUMP_LENGTH)
  }, [handleChange, page])

  const handleJumpNext = useCallback(() => {
    handleChange(page + JUMP_LENGTH)
  }, [handleChange, page])

  const visibleRange = useMemo(() => {
    if (page < VISIBLE_RANGE_LIMIT) {
      return Array.from(
        { length: Math.min(totalPage, VISIBLE_RANGE_LIMIT) },
        (_, idx) => idx + 1
      )
    } else if (page > totalPage - VISIBLE_RANGE_LIMIT) {
      return Array.from(
        { length: VISIBLE_RANGE_LIMIT },
        (_, idx) => idx + totalPage - VISIBLE_RANGE_LIMIT + 1
      )
    }

    const half = Math.floor(VISIBLE_RANGE_LIMIT / 2)

    return Array.from(
      { length: VISIBLE_RANGE_LIMIT },
      (_, idx) => idx + page - half
    )
  }, [page, totalPage])

  return (
    <div className="join flex justify-center my-5">
      <button
        onClick={handlePre}
        className={clsxm('join-item btn btn-outline', {
          'btn-disabled': !hasPre,
        })}
      >
        上一页
      </button>
      {showJumpPre && (
        <button onClick={handleJumpPre} className="join-item btn btn-outline">
          ...
        </button>
      )}

      {visibleRange?.map((p) => (
        <button
          key={p}
          className={clsxm('join-item btn btn-outline', {
            'btn-active': page === p,
          })}
          onClick={() => handleChange(p)}
        >
          {p}
        </button>
      ))}

      {showJumpNext && (
        <button onClick={handleJumpNext} className="join-item btn btn-outline">
          ...
        </button>
      )}
      <button
        className={clsxm('join-item btn btn-outline', {
          'btn-disabled': !hasNext,
        })}
        onClick={handleNext}
      >
        下一页
      </button>
    </div>
  )
}
