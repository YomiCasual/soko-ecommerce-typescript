import { useState } from 'react';
import { Steps ,Button } from 'antd';
import StepOne from './Steps/StepOne';

const { Step } = Steps;

const BuyNowSteps = (): JSX.Element => {
  const [current, setCurrent] = useState<number>(0) 

  const onChange = (): void => {
    if (current >= 3) {
        setCurrent(0)
    }
    else {
        setCurrent( current + 1 );
    }
  };


    return (
      <>

        <Steps current={current}  direction="vertical"
        
        >
          <Step title="Account" description={<StepOne current={current} />}/>
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
        </Steps>
        <Button type="primary"
        onClick={onChange}
        >Next</Button>
      </>
    );
  }


export default BuyNowSteps