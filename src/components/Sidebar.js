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
                        <Icon name="bars" />
                    </Button>
                    <Sidebar.Pushable as={Segment} className="mt-0">
                        <Sidebar
                            as={Menu}
                            animation="overlay"
                            icon="labeled"
                            inverted
                            onHide={this.handleSidebarHide}
                            vertical
                            visible = {visible}
                            width="thin"
                        >
                            <Menu.Item as="a">
                                <Icon name="envelope" />
                                讯息
                            </Menu.Item>
                            <Menu.Item as="a">
                                <Icon name="cny" />
                                财务
                            </Menu.Item>
                            <Menu.Item as="a">
                                <Icon name="chart bar" />
                                分析
                            </Menu.Item>
                            <Menu.Item as="a">
                                <Icon name="chart pie" />
                                统计
                            </Menu.Item>
                            <Menu.Item as="a">
                                <Icon name="calendar alternate outline" />
                                行事历
                            </Menu.Item>
                            <Menu.Item as="a">
                                <Icon name="id card" />
                                会员
                            </Menu.Item>
                        </Sidebar>

                        <Sidebar.Pusher>
                            <Segment basic >
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
