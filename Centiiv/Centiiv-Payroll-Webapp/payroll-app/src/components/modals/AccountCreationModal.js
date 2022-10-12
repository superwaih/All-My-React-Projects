import {
    Modal,
    Flex,
    ModalOverlay,
    ModalContent,

    Button,
    
} from '@chakra-ui/react'


import { Step, Steps, useSteps } from 'chakra-ui-steps';

const contentOne = (
 <div className='grid grid-cols-2 p-4 gap-4 '>
  <div className='border cursor-pointer px-2 py-4 border-slate-500 text-center'>
    <p>Ethereum</p>
  </div>
  <div className='border cursor-pointer px-2 py-4 border-slate-500 text-center'>
    <p>Bitcoin</p>
  </div>
  <div className='border cursor-pointer px-2 py-4 border-slate-500 text-center'>
    <p>USDC</p>
  </div>
  <div className='border cursor-pointer px-2 py-4 border-slate-500 text-center'>
    <p>USDT</p>
  </div>
  <div className='border cursor-pointer px-2 py-4 border-slate-500 text-center'>
    <p>Dai</p>
  </div>
  <div className='border cursor-pointer px-2 py-4 border-slate-500 text-center'>
    <p>Celo Dollar</p>
  </div>
 </div>
  
);

const contentTwo = (
  <div className='p-4 items-center flex space-y-5 flex-col py-6'>
    <h3>Where do you want to transfer Ethereum to</h3>
    <div className='flex w-full justify-between items-center'>
    <div className='border cursor-pointer px-6 py-4 border-slate-500 text-center'>
    <p>Single Address</p>
  </div>
    <span>Or</span>
    <div className='border cursor-pointer px-6 py-4 border-slate-500 text-center'>
    <p>Address List</p>
  </div>

    </div>

  </div>
);
const contentThree = (
  <p py={4}>
    <p>Wlae is goog  Numver 3</p>
  </p>
);

const steps = [
  { label: 'Select Crypto', content: contentOne },
  { label: 'Add Address', content: contentTwo },
  { label: 'Verify', content: contentThree },
];

export const AccountCreationModal = ({isOpen, onClose}) => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Modal blockScrollOnMount={false} isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>

    <Flex flexDir="column" padding="1.5"fcv gftsa width="100%">
      <Steps activeStep={activeStep}>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex p={4}>
          <Button mx="auto" size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Flex>
      )}
    </Flex>
        </ModalContent>
     </Modal>
  );
};