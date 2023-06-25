import React, { useEffect } from 'react';
import Layout from '../../components/users/layout';
function Profile() {
  useEffect(() => {
    require('@passageidentity/passage-elements/passage-profile');
  }, []);
  return (
    <Layout>
      <div className="text-purple-600">
        <passage-profile
          app-id={process.env.NEXT_PUBLIC_PASSAGE_ID_USER}
        ></passage-profile>
      </div>
    </Layout>
  );
}

export default Profile;
