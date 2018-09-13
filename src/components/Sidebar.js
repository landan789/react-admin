import React, { Component } from 'react';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

const __Sidebar = (PageComponet) => {
    class _Sidebar extends Component {
        state = { visible: false }

        handleButtonClick = () => this.setState({ visible: !this.state.visible })
        handleSidebarHide = () => this.setState({ visible: false })
        render () {
            const { visible } = this.state;

            return (
                <div>
                    <Button icon basic onClick={this.handleButtonClick}>
                        <Icon name='bars' />
                    </Button>
                    <Sidebar.Pushable as={Segment}>
                        <Sidebar
                            as={Menu}
                            animation='overlay'
                            icon='labeled'
                            inverted
                            onHide={this.handleSidebarHide}
                            vertical
                            visible = {visible}
                            width='thin'
                        >
                            <Menu.Item as='a'>
                                <Icon name='home' />
                            Home
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='gamepad' />
                            Games
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='camera' />
                            Channels
                            </Menu.Item>
                        </Sidebar>

                        <Sidebar.Pusher>
                            <Segment basic>
                                <PageComponet>

                                </PageComponet>
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            );
        }
    }

    return _Sidebar;
};

export default __Sidebar;