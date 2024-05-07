import React, { useState } from 'react';
import ConversationForm from '../../components/Form/ConversationFlowForm';
import SignUpReq from '../../components/SignUpReq';
import Banner from '../../components/Banner';
import { Cookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const Form = () => {
	const cookies = new Cookies();
  	const token = cookies.get('userid');

	return (
		<div>
			{<Banner/>}
			<br/><br/>
			{token ? <ConversationForm/> : <SignUpReq/>}
		</div>
	);
}

export default Form;