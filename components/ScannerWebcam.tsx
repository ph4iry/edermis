'use client';
import { ArrowPathRoundedSquareIcon, CameraIcon } from "@heroicons/react/24/outline";
import { useRef, useState, useCallback, MutableRefObject } from "react";
import ContextProvider from './ContextProvider';
import ml5 from 'ml5';
import Webcam from "react-webcam";

export default function ScannerWebcam() {
  const webcamRef = useRef(null); // create a webcam reference
  const [imgSrc, setImgSrc] = useState<string>(null!);
  const [cameraDirection, setCameraDirection] = useState<'user' | 'environment'>('environment');

  // create a capture function.
  const capture = useCallback(() => {
    const imageSrc = (webcamRef.current! as Webcam).getScreenshot();
    setImgSrc(imageSrc!);
  }, [webcamRef]);

  return (
    <div className="w-full h-screen overflow-hidden">
      {imgSrc ? (
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSrc} alt="webcam" id="input" />
          <div className="relative top-[-10vh] bg-white rounded-[5vh] h-screen w-screen">
            <Classifier image={(() => {
              const i = document.createElement('img');
              i.setAttribute('src', imgSrc);
              return i;
            })()} />
          </div>
        </div>
      ) : (
        <ContextProvider>
          <div>
            <Webcam height={window?.innerHeight || 0} width={window?.innerWidth || 0} ref={webcamRef} className="max-w-[unset]" videoConstraints={{
              facingMode: cameraDirection,
            }}/>
            <div className="relative top-[-10vh] bg-white rounded-[5vh] h-screen w-screen p-8">
              <div className="font-bold text-2xl flex justify-between items-center">
                <span>Take a picture</span>
                <div className="flex gap-4 items-center">
                  <button onClick={capture} className="h-14 w-14 rounded-full bg-zinc-800 text-white flex justify-center items-center"><CameraIcon className="h-8" /></button>
                  <button onClick={() => setCameraDirection((prev) => {
                    if (prev === 'user') return 'environment';
                    else return 'user';
                  })}><ArrowPathRoundedSquareIcon className="h-8" /></button>
                </div>
              </div>
            </div>
          </div>
        </ContextProvider>
        
      )}
      <div className="btn-container">
        <button onClick={capture}>Capture photo</button>
      </div>
    </div>
  );
};

function Classifier({ image }:{ image: HTMLImageElement }) {
  const modelURL = "https://teachablemachine.withgoogle.com/models/PPA_rMNr_/";
  const [label, setLabel] = useState("")

  let classifier: any;

  const gotResults = async (error: any, results: any) => {
    setLabel(results[0].label);
    console.log(label);
    // classifyVideo(); // Run on next webcam image
  };

  const classifyVideo = () => {
    try {
      //Get the classifications and pass it to the callback function
      classifier.classify(image, gotResults);
    } catch (e) {
      console.log(e);
    }
  };

  (async () => {
    classifier = await ml5.imageClassifier(modelURL + "model.json");
    classifyVideo();
  })();

  return (
    <div>
      {label !== '' && (
      <>
        <div className="flex p-8 pb-4 rounded-lg justify-between items-center">
          <div className="flex flex-col gap-3 font-normal">
            {label !== 'healthy skin' && (
              <>
                <span className="block text-zinc-400 text-base uppercase">This could be...</span>
              </>
            )}
            {label === 'healthy skin' && (
              <>
                <div className="text-xl font-medium">Your skin looks healthy!</div>
                <div>Keep it up with sunscreen, moisturizing, and cleaning your skin thoroughly for no buildup.</div>
              </>
            )}
          </div>
        </div>
        {label !== 'healthy skin' && (
          <DiagnosisDetails label={label} />
        )}
      </>
      )}
    </div>
  )
}

function DiagnosisDetails({ label }:{ label: string }) {
  const getLabelContent = (l: string): [string, string, string[]] => {
    switch(label as ('hives' | 'acne' | 'rosacea' | 'eczema' | 'melanoma')){
      case 'hives':
        return ['Hives, or urticaria, are raised, itchy welts on the skin that often appear suddenly and can vary in size and shape. They are typically a result of an allergic reaction or stress, causing the release of histamine in the skin.', 'Itchy, red welts that may change shape, swelling, and a burning or stinging sensation on the skin.', ["Antihistamines", "topical corticosteroids", "avoidance of triggers."]]
      case 'acne':
        return ['Acne is a common skin condition characterized by the presence of pimples, blackheads, and whiteheads. It occurs when hair follicles become clogged with oil and dead skin cells, leading to the formation of various types of blemishes.', 'Pimples, whiteheads, blackheads, oily skin, and potential scarring.', ['Topical retinoids', 'benzoyl peroxide', 'antibiotics']];
      case 'rosacea':
        return ['Rosacea is a chronic skin condition that primarily affects the face, causing redness, visible blood vessels, and sometimes small, red bumps resembling acne. It tends to flare up in response to triggers like spicy foods, alcohol, and sun exposure.', 'Facial redness, visible blood vessels, pimple-like-bumps, and eye irritation in some cases.', ['Topical or oral antibiotics','topical retinoids', 'laser therapy']]
      case 'eczema':
        return ['Eczema, or atomic dermatitis, is a chronic skin condition characterized by inflammation, itching, and redness. It often starts in childhood and can persist into adulthood, with flare-ups triggered by irritants, allergens, or stress.', 'Itching, red and inflamed skin, dryness, and in severe cases, oozing or crusting', ['Topical corticosteroids', 'Moisturizers', 'Antihistamines']];
      case 'melanoma':
        return ['Melanoma is a type of skin cancer that originates in pigment-producing ceclls called melanocytes. It is often characterized by the development or unusual moles or pigmented lesionsn on the skin and can metastasize (spread) if not detected and treated early.', 'Asymmetrical moles, irregular borders, changes in color,, diameter larger than a pencil eraser, and evolving size or shape.', ['Surgical excision', 'Chemotherapy', 'Immunotherapy']]
    }
  }
  
  return (
    <div className="px-8">
      <div className="text-4xl font-bold">{label.charAt(0).toUpperCase() + label.substring(1).toLowerCase()}</div>
      <div className="text-base font-normal text-zinc-500 truncate">{getLabelContent(label)[0]}</div>
      <button className="w-full rounded-full bg-sky-300/20 py-2 text-lg font-bold text-sky-400">READ MORE</button>
      {/* 
      <div className="text-lg font-medium">Symptoms</div>
      <div className="text-base font-normal italic">{getLabelContent(label)[1]}</div>
      <div className="text-lg font-medium">Treatments</div>
      <div className="text-base font-normal italic">{getLabelContent(label)[2].join(', ')}</div> */}
    </div>
  )
}