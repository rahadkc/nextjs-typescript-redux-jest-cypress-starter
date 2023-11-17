import Link from 'next/link'
import { Caveman } from '../lib/icons'
import styled from '@emotion/styled'

function Error() {
  return (
    <div className="bg-black">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="text-9xl font-bold">
              <IconWrapper>
                <Caveman size="160px" />
              </IconWrapper>
            </div>
            <p className="py-6 text-3xl text-gray-100"> You are in the wrong place </p>
            <Link href="/" className="btn btn-link">
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const IconWrapper = styled('div')`
  display: flex;
  justify-content: center;
  transform: scalex(-1) translatex(17px);
  color: crimson;
  transition: 0.5s;

  &:hover {
    transform: scalex(-1) translatex(17px) rotatey(-65deg);
  }
`

export default Error
