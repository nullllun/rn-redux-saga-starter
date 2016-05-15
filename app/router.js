import React, { Component, PropTypes } from 'react';
import { NavigationExperimental, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import First from './containers/First';
import Second from './containers/Second';
import Third from './containers/Third';
import { navigatePush, navigatePop } from './actions';

const {
	AnimatedView: NavigationAnimatedView,
	Card: NavigationCard,
	Header: NavigationHeader,
	RootContainer: NavigationRootContainer,
} = NavigationExperimental;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

class Router extends Component {
  renderScene({ scene }) {
    const { navigationState } = scene;
    switch (navigationState.key) {
      case 'First':
        return <First />;
      case 'Second':
        return <Second />;
      case 'Third':
        return <Third />;
      default:
        return <First />;
    }
  }

  render() {
    const { navigationState, onNavigate } = this.props;
    return (
      <NavigationAnimatedView
        navigationState={navigationState}
        style={styles.outerContainer}
        onNavigate={onNavigate}
        renderOverlay={props => (
          <NavigationHeader
            {...props}
            renderTitleComponent={() => {
              const title = props.scene.navigationState.title;
              return <NavigationHeader.Title>{title}</NavigationHeader.Title>;
            }}
          />
				)}
        renderScene={props =>
          <NavigationCard
            {...props}
            renderScene={this.renderScene}
            key={props.scene.navigationState.key}
          />
				}
      />
		);
  }
}

Router.propTypes = {
  navigationState: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    navigationState: state.navigationState,
  }),
	dispatch => ({
  onNavigate: (action) => {
    if (action.type && (
			action.type === NavigationRootContainer.getBackAction().type ||
			action.type === NavigationCard.CardStackPanResponder.Actions.BACK.type)
		) {
      dispatch(navigatePop());
    } else {
      dispatch(navigatePush(action));
    }
  },
	})
)(Router);
