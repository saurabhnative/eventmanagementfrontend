import React, { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    require('@passageidentity/passage-elements/passage-auth');
  }, []);

  return (
    <div>
      <passage-auth app-id={process.env.NEXT_PUBLIC_PASSAGE_ID}></passage-auth>
    </div>
  );
}
