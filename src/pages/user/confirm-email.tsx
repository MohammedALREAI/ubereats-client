import {  gql, useApolloClient } from "@apollo/client";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useHistory } from "react-router-dom";
import { useMeQuery, useVerifyEmailMutation } from "../../generated/graphql";



export const ConfirmEmail = () => {
  const { data: userData } =useMeQuery();
  const client = useApolloClient();
  const history = useHistory();
  
  const [verifyEmail] = useVerifyEmailMutation({
      onCompleted:(data) => {
        const {verifyEmail:{ok}}=data;
        if (ok && userData?.me.id) {
          client.writeFragment({
            id: `User:${userData.me.id}`,
            fragment: gql`
              fragment VerifiedUser on User {
                verified
              }
            `,
            data: {
              verified: true,
            },
          });
          history.push("/");
        }
    }}
  );
  useEffect(() => {
    const [_, code] = window.location.href.split("code=");
    verifyEmail({
      variables: {
        input: {
          code,
        },
      },
    });
  }, [verifyEmail]);
  return (
    <div className="mt-52 flex flex-col items-center justify-center">
      <Helmet>
        <title>Verify Email | Nuber Eats</title>
      </Helmet>
      <h2 className="text-lg mb-1 font-medium">Confirming email...</h2>
      <h4 className="text-gray-700 text-sm">
        Please wait, don't close this page...
      </h4>
    </div>
  );
};
