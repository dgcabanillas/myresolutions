import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from '../../ui/layouts/MainLayout.jsx';
import ResolutionsWrapper from '../../ui/components/ResolutionsWrapper.jsx';
import ResolutionDetail from '../../ui/components/ResolutionDetail.jsx';
import About from '../../ui/layouts/About.jsx';



FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<ResolutionsWrapper />)
		});
	}
});

FlowRouter.route('/about', {
	action() {
		mount(MainLayout, {
			content: (<About />)
		});
	}
});

FlowRouter.route('/resolutions/:id', {
	action(params) {
		mount(MainLayout, {
			content: (<ResolutionDetail id={params.id} />)
		});
	}
});
